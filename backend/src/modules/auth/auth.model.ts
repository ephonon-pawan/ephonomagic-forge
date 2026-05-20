import bcrypt from "bcryptjs";
import mongoose, { HydratedDocument } from "mongoose";
import { Role } from "./auth.types";

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: Role;
  refreshToken?: string;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false
    },
    role: {
      type: String,
      enum: ["admin", "editor"] satisfies Role[],
      default: "admin"
    },
    refreshToken: {
      type: String,
      select: false
    }
  },
  {
    timestamps: true
  }
);

userSchema.pre("save", async function savePassword(next) {
  if (!this.isModified("password")) {
    next();
    return;
  }

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

export type UserDocument = HydratedDocument<IUser>;

export const User = mongoose.model<IUser>("User", userSchema);
