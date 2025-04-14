import { PostgresConfig } from "@/lib/env";
import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: PostgresConfig.DATABASE_URL,
  max: PostgresConfig.MAX_POOL_CONNECTIONS,
  idleTimeoutMillis: PostgresConfig.MAX_CLIENT_IDLE_TIME_IN_MS * 1000,
  connectionTimeoutMillis: PostgresConfig.MAX_CONNECTION_TIMEOUT_IN_MS * 1000,
});

export const db = drizzle({ client: pool });
