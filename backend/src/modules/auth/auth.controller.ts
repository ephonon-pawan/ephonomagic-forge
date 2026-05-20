import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { sendResponse } from "../../utils/apiResponse";
import { clearRefreshTokenCookie, setRefreshTokenCookie } from "../../utils/cookies";
import { ApiError } from "../../utils/ApiError";

export class AuthController {
  static async register(req: Request, res: Response): Promise<void> {
    const result = await AuthService.register(req.body);
    setRefreshTokenCookie(res, result.refreshToken);

    sendResponse(res, 201, "Admin registered successfully", {
      accessToken: result.accessToken,
      user: result.user
    });
  }

  static async login(req: Request, res: Response): Promise<void> {
    const result = await AuthService.login(req.body);
    setRefreshTokenCookie(res, result.refreshToken);

    sendResponse(res, 200, "Login successful", {
      accessToken: result.accessToken,
      user: result.user
    });
  }

  static async logout(req: Request, res: Response): Promise<void> {
    if (!req.user) {
      throw new ApiError(401, "Unauthorized");
    }

    await AuthService.logout(req.user.userId);
    clearRefreshTokenCookie(res);

    sendResponse(res, 200, "Logout successful");
  }

  static async profile(req: Request, res: Response): Promise<void> {
    if (!req.user) {
      throw new ApiError(401, "Unauthorized");
    }

    const profile = await AuthService.getProfile(req.user.userId);
    sendResponse(res, 200, "Profile fetched successfully", profile);
  }

  static async refresh(req: Request, res: Response): Promise<void> {
    const refreshToken = req.cookies.refreshToken as string | undefined;
    const accessToken = await AuthService.refreshAccessToken(refreshToken ?? "");

    sendResponse(res, 200, "Access token refreshed successfully", {
      accessToken
    });
  }
}
