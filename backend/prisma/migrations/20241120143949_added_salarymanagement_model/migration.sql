-- CreateTable
CREATE TABLE "SalaryManagement" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "presentDays" TEXT NOT NULL DEFAULT '',
    "updatedSalary" TEXT NOT NULL DEFAULT '',
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "SalaryManagement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SalaryManagement_employeeId_key" ON "SalaryManagement"("employeeId");

-- AddForeignKey
ALTER TABLE "SalaryManagement" ADD CONSTRAINT "SalaryManagement_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
