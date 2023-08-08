CREATE TABLE IF NOT EXISTS "reg_users" (
	"user_id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"email" varchar(256) NOT NULL,
	"password" varchar(256) NOT NULL,
	"role" varchar(256) DEFAULT 'user',
	"photo" varchar(256) DEFAULT 'default.png',
	"verified" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now(),
	CONSTRAINT "reg_users_email_unique" UNIQUE("email")
);
