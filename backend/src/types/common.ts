import { Request } from "express";

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}

export interface AuthenticatedRequest extends Request {
  user: Express.User;
}
