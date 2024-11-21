-- CreateTable
CREATE TABLE "Expenditures" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "amount" TEXT NOT NULL DEFAULT '',
    "createdBy" TEXT NOT NULL DEFAULT 'ADMIN',
    "createdOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Expenditures_pkey" PRIMARY KEY ("id")
);
