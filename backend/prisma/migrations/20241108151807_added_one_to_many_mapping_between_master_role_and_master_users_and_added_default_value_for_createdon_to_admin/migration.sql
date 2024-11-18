-- DropIndex
DROP INDEX "MasterUser_roleId_key";

-- AlterTable
ALTER TABLE "MasterMenu" ALTER COLUMN "createdBy" SET DEFAULT 'ADMIN';

-- AlterTable
ALTER TABLE "MasterMenuAccess" ALTER COLUMN "createdBy" SET DEFAULT 'ADMIN';

-- AlterTable
ALTER TABLE "MasterRole" ALTER COLUMN "createdBy" SET DEFAULT 'ADMIN';

-- AlterTable
ALTER TABLE "MasterUser" ALTER COLUMN "createdBy" SET DEFAULT 'ADMIN';

-- AlterTable
ALTER TABLE "Teacher" ALTER COLUMN "createdBy" SET DEFAULT 'ADMIN',
ALTER COLUMN "masterUserId" DROP DEFAULT;
