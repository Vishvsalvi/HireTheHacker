import { db } from "@/db";
import { jobDescription } from "@/db/schema";
import { auth } from "./auth";
import { headers } from "next/headers";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { AWSConfig } from "./env";
import { s3Client } from "./aws";

export const getUserId = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session && session.user) {
    return session.user.id;
  }
  return null;
};

export const addJD = async ({
  title,
  description,
  userId,
}: {
  title: string;
  description: string;
  userId: string;
}) => {
  const data = await db
    .insert(jobDescription)
    .values({
      title,
      description,
      userId,
    })
    .returning({ insertedId: jobDescription.id });
  return data[0].insertedId;
};

//const getFileHash = async (file: File) => {
//  const stream = await file.arrayBuffer();
//
//};

export const uploadResumeToS3 = async (
  files: File[],
  jobDescriptionId: string,
) => {
  try {
    await Promise.all(
      files.map(async (file) => {
        const command = new PutObjectCommand({
          Bucket: AWSConfig.AWS_S3_BUCKET_NAME,
          Key: `${jobDescriptionId}-${file.name}`,
          ContentType: file.type,
        });

        const signedUrl = await getSignedUrl(s3Client, command);
        await fetch(signedUrl, {
          method: "PUT",
          headers: {
            "Content-Type": file.type,
          },
          body: file,
        });
      }),
    );
    return true;
  } catch (error) {
    return false;
  }
};
