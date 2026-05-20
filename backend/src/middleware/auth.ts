import { NextFunction, Request, Response } from "express";
import { verifyAccessToken } from "../utils/jwt";
import { ApiError } from "../utils/ApiError";
import { Role } from "../modules/auth/auth.types";

export const protect = (req: Request, _res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    next(new ApiError(401, "Authorization token is required"));
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyAccessToken(token);
    req.user = {
      userId: decoded.userId,
      role: decoded.role
    };
    next();
  } catch {
    next(new ApiError(401, "Invalid or expired token"));
  }
};

export const authorize = (...roles: Role[]) => {
  return (req: Request, _res: Response, next: NextFunction): void => {
    if (!req.user) {
      next(new ApiError(401, "Unauthorized"));
      return;
    }

    if (!roles.includes(req.user.role)) {
      next(new ApiError(403, "Forbidden"));
      return;
    }

    next();
  };
};
