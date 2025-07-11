/*
  Warnings:

  - Added the required column `customerId` to the `sales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "categories" ALTER COLUMN "categoryId" SET DEFAULT ('cat_' || gen_random_uuid())::text;

-- AlterTable
ALTER TABLE "customers" ALTER COLUMN "customerId" SET DEFAULT ('cus_' || gen_random_uuid())::text;

-- AlterTable
ALTER TABLE "productPurchases" ALTER COLUMN "productPurchaseId" SET DEFAULT ('prup_' || gen_random_uuid())::text;

-- AlterTable
ALTER TABLE "productSales" ALTER COLUMN "productSaleId" SET DEFAULT ('prsa_' || gen_random_uuid())::text;

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "productId" SET DEFAULT ('pro_' || gen_random_uuid())::text;

-- AlterTable
ALTER TABLE "purchases" ALTER COLUMN "purchaseId" SET DEFAULT ('usr_' || gen_random_uuid())::text;

-- AlterTable
ALTER TABLE "roles" ALTER COLUMN "roleId" SET DEFAULT ('rol_' || gen_random_uuid())::text;

-- AlterTable
ALTER TABLE "sales" ADD COLUMN     "customerId" TEXT NOT NULL,
ALTER COLUMN "saleId" SET DEFAULT ('sal_' || gen_random_uuid())::text;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "userId" SET DEFAULT ('usr_' || gen_random_uuid())::text;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;
