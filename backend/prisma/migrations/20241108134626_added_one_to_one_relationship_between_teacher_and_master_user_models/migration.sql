/*
  Warnings:

  - A unique constraint covering the columns `[masterUserId]` on the table `Teacher` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "masterUserId" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_masterUserId_key" ON "Teacher"("masterUserId");

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_masterUserId_fkey" FOREIGN KEY ("masterUserId") REFERENCES "MasterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
