/*
  Warnings:

  - You are about to drop the column `presentDays` on the `SalaryManagement` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "presentDays" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "SalaryManagement" DROP COLUMN "presentDays";
