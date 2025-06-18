/*
  Warnings:

  - The `createdBy` column on the `productPurchases` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `deletedBy` column on the `productPurchases` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `createdBy` column on the `productSales` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `deletedBy` column on the `productSales` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `createdBy` column on the `products` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `deletedBy` column on the `products` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `createdBy` column on the `purchases` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `deletedBy` column on the `purchases` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `createdBy` column on the `roles` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `deletedBy` column on the `roles` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `createdBy` column on the `sales` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `deletedBy` column on the `sales` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `isDeleted` on the `users` table. All the data in the column will be lost.
  - The `createdBy` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `deletedBy` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "productPurchases" ALTER COLUMN "deletedAt" DROP NOT NULL,
DROP COLUMN "createdBy",
ADD COLUMN     "createdBy" INTEGER,
DROP COLUMN "deletedBy",
ADD COLUMN     "deletedBy" INTEGER;

-- AlterTable
ALTER TABLE "productSales" ALTER COLUMN "deletedAt" DROP NOT NULL,
DROP COLUMN "createdBy",
ADD COLUMN     "createdBy" INTEGER,
DROP COLUMN "deletedBy",
ADD COLUMN     "deletedBy" INTEGER;

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "deletedAt" DROP NOT NULL,
DROP COLUMN "createdBy",
ADD COLUMN     "createdBy" INTEGER,
DROP COLUMN "deletedBy",
ADD COLUMN     "deletedBy" INTEGER;

-- AlterTable
ALTER TABLE "purchases" ALTER COLUMN "deletedAt" DROP NOT NULL,
DROP COLUMN "createdBy",
ADD COLUMN     "createdBy" INTEGER,
DROP COLUMN "deletedBy",
ADD COLUMN     "deletedBy" INTEGER;

-- AlterTable
ALTER TABLE "roles" ALTER COLUMN "deletedAt" DROP NOT NULL,
DROP COLUMN "createdBy",
ADD COLUMN     "createdBy" INTEGER,
DROP COLUMN "deletedBy",
ADD COLUMN     "deletedBy" INTEGER;

-- AlterTable
ALTER TABLE "sales" ALTER COLUMN "deletedAt" DROP NOT NULL,
DROP COLUMN "createdBy",
ADD COLUMN     "createdBy" INTEGER,
DROP COLUMN "deletedBy",
ADD COLUMN     "deletedBy" INTEGER;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "isDeleted",
ALTER COLUMN "deletedAt" DROP NOT NULL,
DROP COLUMN "createdBy",
ADD COLUMN     "createdBy" INTEGER,
DROP COLUMN "deletedBy",
ADD COLUMN     "deletedBy" INTEGER;

-- AddForeignKey
ALTER TABLE "roles" ADD CONSTRAINT "roles_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles" ADD CONSTRAINT "roles_deletedBy_fkey" FOREIGN KEY ("deletedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_deletedBy_fkey" FOREIGN KEY ("deletedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_deletedBy_fkey" FOREIGN KEY ("deletedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_deletedBy_fkey" FOREIGN KEY ("deletedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productPurchases" ADD CONSTRAINT "productPurchases_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productPurchases" ADD CONSTRAINT "productPurchases_deletedBy_fkey" FOREIGN KEY ("deletedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productSales" ADD CONSTRAINT "productSales_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productSales" ADD CONSTRAINT "productSales_deletedBy_fkey" FOREIGN KEY ("deletedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;
