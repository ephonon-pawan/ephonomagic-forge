import { connectDatabase } from "../config/db";
import { env } from "../config/env";
import { User } from "../modules/auth/auth.model";

const seedAdmin = async (): Promise<void> => {
  await connectDatabase();

  const existingAdmin = await User.findOne({ email: env.defaultAdminEmail.toLowerCase() });

  if (existingAdmin) {
    console.log("Default admin already exists");
    process.exit(0);
  }

  await User.create({
    name: env.defaultAdminName,
    email: env.defaultAdminEmail.toLowerCase(),
    password: env.defaultAdminPassword,
    role: "admin"
  });

  console.log("Default admin account created successfully");
  process.exit(0);
};

void seedAdmin().catch((error: unknown) => {
  console.error("Failed to seed admin", error);
  process.exit(1);
});
