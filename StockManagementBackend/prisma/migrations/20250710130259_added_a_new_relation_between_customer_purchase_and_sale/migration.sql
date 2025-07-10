/*
  Warnings:

  - You are about to drop the `_CustomerOwnedProducts` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `customerId` to the `purchases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `supplierId` to the `purchases` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CustomerOwnedProducts" DROP CONSTRAINT "_CustomerOwnedProducts_A_fkey";

-- DropForeignKey
ALTER TABLE "_CustomerOwnedProducts" DROP CONSTRAINT "_CustomerOwnedProducts_B_fkey";

-- AlterTable
ALTER TABLE "customers" ALTER COLUMN "customerId" SET DEFAULT ('usr_' || gen_random_uuid())::text;

-- AlterTable
ALTER TABLE "productPurchases" ALTER COLUMN "productPurchaseId" SET DEFAULT ('usr_' || gen_random_uuid())::text;

-- AlterTable
ALTER TABLE "productSales" ALTER COLUMN "productSaleId" SET DEFAULT ('usr_' || gen_random_uuid())::text;

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "productId" SET DEFAULT ('usr_' || gen_random_uuid())::text;

-- AlterTable
ALTER TABLE "purchases" ADD COLUMN     "customerCustomerId" TEXT,
ADD COLUMN     "customerId" TEXT NOT NULL,
ADD COLUMN     "supplierId" TEXT NOT NULL,
ALTER COLUMN "purchaseId" SET DEFAULT ('usr_' || gen_random_uuid())::text;

-- AlterTable
ALTER TABLE "roles" ALTER COLUMN "roleId" SET DEFAULT ('usr_' || gen_random_uuid())::text;

-- AlterTable
ALTER TABLE "sales" ALTER COLUMN "saleId" SET DEFAULT ('usr_' || gen_random_uuid())::text;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "userId" SET DEFAULT ('usr_' || gen_random_uuid())::text;

-- DropTable
DROP TABLE "_CustomerOwnedProducts";

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "customers"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("customerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_customerCustomerId_fkey" FOREIGN KEY ("customerCustomerId") REFERENCES "customers"("customerId") ON DELETE SET NULL ON UPDATE CASCADE;
