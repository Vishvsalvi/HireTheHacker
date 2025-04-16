import { RedisConfig } from "@/lib/env";
import { Redis } from "ioredis";

export const redisConn = new Redis({
  host: RedisConfig.REDIS_HOST,
  password: RedisConfig.REDIS_PASS,
});

redisConn.on("connect", () => {
  console.log("Application connected to Redis Server");
});

redisConn.on("end", () => {
  console.log("Application disconnected from Redis Server");
});
