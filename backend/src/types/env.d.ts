declare namespace NodeJS {
  interface ProcessEnv {
    PORT?: string;
    NODE_ENV?: "development" | "production" | "test";
    CLIENT_URL?: string;
    MONGODB_URI?: string;
    JWT_ACCESS_SECRET?: string;
    JWT_REFRESH_SECRET?: string;
    JWT_ACCESS_EXPIRES_IN?: string;
    JWT_REFRESH_EXPIRES_IN?: string;
    COOKIE_SECURE?: string;
    CLOUDINARY_CLOUD_NAME?: string;
    CLOUDINARY_API_KEY?: string;
    CLOUDINARY_API_SECRET?: string;
    DEFAULT_ADMIN_NAME?: string;
    DEFAULT_ADMIN_EMAIL?: string;
    DEFAULT_ADMIN_PASSWORD?: string;
  }
}
