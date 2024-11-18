/*
  Warnings:

  - You are about to drop the column `username` on the `MasterUser` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "MasterUser" DROP COLUMN "username";

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "password" TEXT NOT NULL DEFAULT '';
