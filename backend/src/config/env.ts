import dotenv from "dotenv";

dotenv.config();

const getEnv = (key: keyof NodeJS.ProcessEnv, fallback?: string): string => {
  const value = process.env[key] ?? fallback;

  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
};

export const env = {
  port: Number(process.env.PORT ?? 5000),
  nodeEnv: process.env.NODE_ENV ?? "development",
  clientUrl: getEnv("CLIENT_URL", "http://localhost:3000"),
  mongoUri: getEnv("MONGODB_URI"),
  jwtAccessSecret: getEnv("JWT_ACCESS_SECRET"),
  jwtRefreshSecret: getEnv("JWT_REFRESH_SECRET"),
  jwtAccessExpiresIn: getEnv("JWT_ACCESS_EXPIRES_IN", "15m"),
  jwtRefreshExpiresIn: getEnv("JWT_REFRESH_EXPIRES_IN", "7d"),
  cookieSecure: process.env.COOKIE_SECURE === "true",
  cloudinaryCloudName: getEnv("CLOUDINARY_CLOUD_NAME", "demo"),
  cloudinaryApiKey: getEnv("CLOUDINARY_API_KEY", "demo"),
  cloudinaryApiSecret: getEnv("CLOUDINARY_API_SECRET", "demo"),
  defaultAdminName: getEnv("DEFAULT_ADMIN_NAME", "Ephonon Admin"),
  defaultAdminEmail: getEnv("DEFAULT_ADMIN_EMAIL", "admin@ephonon.com"),
  defaultAdminPassword: getEnv("DEFAULT_ADMIN_PASSWORD", "ChangeThisPassword123!")
};
