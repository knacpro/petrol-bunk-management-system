-- CreateTable
CREATE TABLE "Teacher" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL DEFAULT '',
    "mobileNumber" BIGINT NOT NULL DEFAULT 0,
    "aadharNumber" BIGINT NOT NULL DEFAULT 0,
    "dob" TIMESTAMP(3),
    "createdBy" TEXT NOT NULL DEFAULT '',
    "createdOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);
