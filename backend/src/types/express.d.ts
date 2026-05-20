import { Role } from "../modules/auth/auth.types";

declare global {
  namespace Express {
    interface User {
      userId: string;
      role: Role;
    }

    interface Request {
      user?: User;
    }
  }
}

export {};
