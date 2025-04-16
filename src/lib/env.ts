import "dotenv/config";

export const BetterAuthConfig = {
  BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET!,
  BETTER_AUTH_URL: process.env.BETTER_AUTH_URL!,
};

export const PostgresConfig = {
  DATABASE_URL: process.env.DATABASE_URL!,
  MAX_POOL_CONNECTIONS: parseInt(process.env.MAX_POOL_CONNECTIONS!, 10),
  MAX_CLIENT_IDLE_TIME_IN_MS: parseInt(
    process.env.MAX_CLIENT_IDLE_TIME_IN_MS!,
    10,
  ),
  MAX_CONNECTION_TIMEOUT_IN_MS: parseInt(
    process.env.MAX_CONNECTION_TIMEOUT_IN_MS!,
    10,
  ),
};

export const RedisConfig = {
  REDIS_HOST: process.env.REDIS_HOST!,
  REDIS_PASS: process.env.REDIS_PASS,
};

export const AWSConfig = {
  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY!,
  AWS_ACCESS_KEY_SECRET: process.env.AWS_ACCESS_KEY_SECRET!,
  AWS_S3_BUCKET_NAME: process.env.AWS_S3_BUCKET_NAME!,
};

export const OAuthConfig = {
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID!,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET!,
};
