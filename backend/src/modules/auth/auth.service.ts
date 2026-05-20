import bcrypt from "bcryptjs";
import { User, UserDocument } from "./auth.model";
import { ApiError } from "../../utils/ApiError";
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from "../../utils/jwt";
import { Role } from "./auth.types";

interface RegisterInput {
  name: string;
  email: string;
  password: string;
  role?: Role;
}

interface LoginInput {
  email: string;
  password: string;
}

interface AuthResponse {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: Role;
  };
  refreshToken: string;
}

const buildAuthResponse = (user: UserDocument): AuthResponse => {
  const payload = {
    userId: user._id.toString(),
    role: user.role
  };

  return {
    accessToken: generateAccessToken(payload),
    refreshToken: generateRefreshToken(payload),
    user: {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role
    }
  };
};

export class AuthService {
  static async register(payload: RegisterInput): Promise<AuthResponse> {
    const existingUser = await User.findOne({ email: payload.email.toLowerCase() });

    if (existingUser) {
      throw new ApiError(409, "User already exists with this email");
    }

    const user = await User.create({
      ...payload,
      email: payload.email.toLowerCase()
    });

    const authData = buildAuthResponse(user);
    user.refreshToken = await bcrypt.hash(authData.refreshToken, 10);
    await user.save();

    return authData;
  }

  static async login(payload: LoginInput): Promise<AuthResponse> {
    const user = await User.findOne({ email: payload.email.toLowerCase() }).select("+password +refreshToken");

    if (!user || !(await bcrypt.compare(payload.password, user.password))) {
      throw new ApiError(401, "Invalid email or password");
    }

    const authData = buildAuthResponse(user);
    user.refreshToken = await bcrypt.hash(authData.refreshToken, 10);
    await user.save();

    return authData;
  }

  static async logout(userId: string): Promise<void> {
    await User.findByIdAndUpdate(userId, { $unset: { refreshToken: "" } });
  }

  static async getProfile(userId: string) {
    const user = await User.findById(userId).select("-password -refreshToken");

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    return user;
  }

  static async refreshAccessToken(refreshToken: string): Promise<string> {
    if (!refreshToken) {
      throw new ApiError(401, "Refresh token is required");
    }

    let decoded: { userId: string; role: Role };

    try {
      decoded = verifyRefreshToken(refreshToken);
    } catch {
      throw new ApiError(401, "Refresh token is invalid");
    }

    const user = await User.findById(decoded.userId).select("+refreshToken");

    if (!user || !user.refreshToken) {
      throw new ApiError(401, "Refresh token is invalid");
    }

    const isMatch = await bcrypt.compare(refreshToken, user.refreshToken);

    if (!isMatch) {
      throw new ApiError(401, "Refresh token is invalid");
    }

    return generateAccessToken({
      userId: user._id.toString(),
      role: user.role
    });
  }
}
