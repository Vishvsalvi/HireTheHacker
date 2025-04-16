import { addJD, getUserId, uploadResumeToS3 } from "@/lib/action";
import { resumeQueue } from "@/lib/jobQueue";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const userId = await getUserId();

  if (!userId) {
    return NextResponse.json({ message: "Unauthenticated" }, { status: 401 });
  }

  const data = await request.formData();

  const files = data.getAll("files") as File[];

  if (files.length <= 0) {
    return NextResponse.json(
      {
        success: false,
        message: "Resumes are required for screening candidacy",
      },
      { status: 401 },
    );
  }

  const title = data.get("jobTitle") as string;
  const description = data.get("jobDescription") as string;

  const insertId = await addJD({ title, description, userId });

  if (await uploadResumeToS3(files, insertId)) {
    await resumeQueue.add("process-resume", { jobId: insertId });
  } else {
    return NextResponse.json(
      {
        success: false,
        message:
          "Your resumes were not uploaded on our server, please try again later",
      },
      { status: 500 },
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: "You will be notified once your files are processed",
    },
    { status: 200 },
  );
}
