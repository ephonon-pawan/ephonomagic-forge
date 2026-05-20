import { Response } from "express";
import { env } from "../config/env";

const getRefreshTokenMaxAge = (): number => {
  return 7 * 24 * 60 * 60 * 1000;
};

export const setRefreshTokenCookie = (res: Response, token: string): void => {
  res.cookie("refreshToken", token, {
    httpOnly: true,
    sameSite: "strict",
    secure: env.cookieSecure,
    maxAge: getRefreshTokenMaxAge()
  });
};

export const clearRefreshTokenCookie = (res: Response): void => {
  res.clearCookie("refreshToken", {
    httpOnly: true,
    sameSite: "strict",
    secure: env.cookieSecure
  });
};
