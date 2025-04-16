import { S3Client } from "@aws-sdk/client-s3";
import { AWSConfig } from "./env";

export const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: AWSConfig.AWS_ACCESS_KEY,
    secretAccessKey: AWSConfig.AWS_ACCESS_KEY_SECRET,
  },
});
