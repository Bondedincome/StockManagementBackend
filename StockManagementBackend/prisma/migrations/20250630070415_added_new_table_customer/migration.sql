-- AlterTable
ALTER TABLE "productPurchases" ALTER COLUMN "productPurchaseId" SET DEFAULT ('usr_' || gen_random_uuid())::text;

-- AlterTable
ALTER TABLE "productSales" ALTER COLUMN "productSaleId" SET DEFAULT ('usr_' || gen_random_uuid())::text;

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "productId" SET DEFAULT ('usr_' || gen_random_uuid())::text;

-- AlterTable
ALTER TABLE "purchases" ALTER COLUMN "purchaseId" SET DEFAULT ('usr_' || gen_random_uuid())::text;

-- AlterTable
ALTER TABLE "roles" ALTER COLUMN "roleId" SET DEFAULT ('usr_' || gen_random_uuid())::text;

-- AlterTable
ALTER TABLE "sales" ALTER COLUMN "saleId" SET DEFAULT ('usr_' || gen_random_uuid())::text;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "userId" SET DEFAULT ('usr_' || gen_random_uuid())::text;

-- CreateTable
CREATE TABLE "customers" (
    "customerId" TEXT NOT NULL DEFAULT ('usr_' || gen_random_uuid())::text,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3),
    "createdBy" TEXT,
    "deletedBy" TEXT,
    "updatedBy" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("customerId")
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_key" ON "customers"("email");

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_deletedBy_fkey" FOREIGN KEY ("deletedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
