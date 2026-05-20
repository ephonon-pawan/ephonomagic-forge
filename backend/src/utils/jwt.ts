import jwt, { Secret, SignOptions } from "jsonwebtoken";
import { env } from "../config/env";
import { Role } from "../modules/auth/auth.types";

interface TokenPayload {
  userId: string;
  role: Role;
}

const signToken = (
  payload: TokenPayload,
  secret: Secret,
  expiresIn: string
): string => {
  const options: SignOptions = { expiresIn: expiresIn as SignOptions["expiresIn"] };
  return jwt.sign(payload, secret, options);
};

export const generateAccessToken = (payload: TokenPayload): string => {
  return signToken(payload, env.jwtAccessSecret, env.jwtAccessExpiresIn);
};

export const generateRefreshToken = (payload: TokenPayload): string => {
  return signToken(payload, env.jwtRefreshSecret, env.jwtRefreshExpiresIn);
};

export const verifyAccessToken = (token: string): TokenPayload => {
  return jwt.verify(token, env.jwtAccessSecret) as TokenPayload;
};

export const verifyRefreshToken = (token: string): TokenPayload => {
  return jwt.verify(token, env.jwtRefreshSecret) as TokenPayload;
};
