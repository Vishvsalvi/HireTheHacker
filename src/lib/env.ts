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

export const OAuthConfig = {
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID!,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET!,
};
