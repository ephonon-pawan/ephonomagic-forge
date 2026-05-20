import { NextFunction, Request, Response } from "express";
import { Error as MongooseError } from "mongoose";
import { ApiError } from "../utils/ApiError";

export const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): Response => {
  if (error instanceof ApiError) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message
    });
  }

  if (error instanceof MongooseError.ValidationError) {
    return res.status(400).json({
      success: false,
      message: Object.values(error.errors)
        .map((item) => item.message)
        .join(", ")
    });
  }

  if (error instanceof MongooseError.CastError) {
    return res.status(400).json({
      success: false,
      message: "Invalid resource identifier"
    });
  }

  return res.status(500).json({
    success: false,
    message: error.message || "Internal server error"
  });
};
