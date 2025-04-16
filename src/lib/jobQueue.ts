import { Queue } from "bullmq";
import { redisConn } from "@/db/redis";

export const resumeQueue = new Queue("resume-processing", {
  connection: redisConn,
});
