CREATE TABLE "candidate" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text,
	"contact_details" jsonb,
	"professional_title" text,
	"professional_summary" text,
	"social_links" text[] DEFAULT '{}',
	"project_links" text[] DEFAULT '{}',
	"experience" text,
	"education" text,
	"total_experience" double precision,
	"exceptional_ability" text,
	"tech_stack" text[],
	"resume_url" text NOT NULL,
	"resume_hash" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "job_description" (
	"id" uuid PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "screening" (
	"id" uuid PRIMARY KEY NOT NULL,
	"jd" uuid NOT NULL,
	"candidate" uuid NOT NULL,
	"rank" integer NOT NULL,
	"is_shortlisted" boolean NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "job_description" ADD CONSTRAINT "job_description_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "screening" ADD CONSTRAINT "screening_jd_job_description_id_fk" FOREIGN KEY ("jd") REFERENCES "public"."job_description"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "screening" ADD CONSTRAINT "screening_candidate_candidate_id_fk" FOREIGN KEY ("candidate") REFERENCES "public"."candidate"("id") ON DELETE no action ON UPDATE no action;