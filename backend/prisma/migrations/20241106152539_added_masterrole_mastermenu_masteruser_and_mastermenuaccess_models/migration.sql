-- CreateTable
CREATE TABLE "MasterRole" (
    "id" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT '',
    "createdBy" TEXT NOT NULL DEFAULT '',
    "createdOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "MasterRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MasterUser" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL DEFAULT '',
    "username" TEXT NOT NULL DEFAULT '',
    "password" TEXT NOT NULL DEFAULT '',
    "createdBy" TEXT NOT NULL DEFAULT '',
    "createdOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "roleId" TEXT NOT NULL,

    CONSTRAINT "MasterUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MasterMenuAccess" (
    "id" TEXT NOT NULL,
    "menuId" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL DEFAULT '',
    "createdOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "masterUserId" TEXT NOT NULL,
    "masterMenuId" TEXT NOT NULL,

    CONSTRAINT "MasterMenuAccess_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MasterMenu" (
    "id" TEXT NOT NULL,
    "menuName" TEXT NOT NULL DEFAULT '',
    "createdBy" TEXT NOT NULL DEFAULT '',
    "createdOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "MasterMenu_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MasterUser_email_key" ON "MasterUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "MasterUser_roleId_key" ON "MasterUser"("roleId");

-- CreateIndex
CREATE UNIQUE INDEX "MasterMenuAccess_masterUserId_key" ON "MasterMenuAccess"("masterUserId");

-- CreateIndex
CREATE UNIQUE INDEX "MasterMenuAccess_masterMenuId_key" ON "MasterMenuAccess"("masterMenuId");

-- AddForeignKey
ALTER TABLE "MasterUser" ADD CONSTRAINT "MasterUser_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "MasterRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterMenuAccess" ADD CONSTRAINT "MasterMenuAccess_masterUserId_fkey" FOREIGN KEY ("masterUserId") REFERENCES "MasterUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterMenuAccess" ADD CONSTRAINT "MasterMenuAccess_masterMenuId_fkey" FOREIGN KEY ("masterMenuId") REFERENCES "MasterMenu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
