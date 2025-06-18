/*
  Warnings:

  - Changed the type of `productId` on the `purchases` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "productPurchases" ADD COLUMN     "updatedAt" TIMESTAMP(3),
ADD COLUMN     "updatedBy" INTEGER;

-- AlterTable
ALTER TABLE "productSales" ADD COLUMN     "updatedAt" TIMESTAMP(3),
ADD COLUMN     "updatedBy" INTEGER;

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "updatedAt" TIMESTAMP(3),
ADD COLUMN     "updatedBy" INTEGER;

-- AlterTable
ALTER TABLE "purchases" ADD COLUMN     "updatedAt" TIMESTAMP(3),
ADD COLUMN     "updatedBy" INTEGER,
DROP COLUMN "productId",
ADD COLUMN     "productId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "roles" ADD COLUMN     "updatedAt" TIMESTAMP(3),
ADD COLUMN     "updatedBy" INTEGER;

-- AlterTable
ALTER TABLE "sales" ADD COLUMN     "updatedAt" TIMESTAMP(3),
ADD COLUMN     "updatedBy" INTEGER;

-- AddForeignKey
ALTER TABLE "roles" ADD CONSTRAINT "roles_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productPurchases" ADD CONSTRAINT "productPurchases_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productSales" ADD CONSTRAINT "productSales_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;
