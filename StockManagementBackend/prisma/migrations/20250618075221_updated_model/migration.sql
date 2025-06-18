/*
  Warnings:

  - The primary key for the `productPurchases` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `productSales` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `purchases` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `roles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `sales` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.
  - Added the required column `firstName` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "productPurchases" DROP CONSTRAINT "productPurchases_createdBy_fkey";

-- DropForeignKey
ALTER TABLE "productPurchases" DROP CONSTRAINT "productPurchases_deletedBy_fkey";

-- DropForeignKey
ALTER TABLE "productPurchases" DROP CONSTRAINT "productPurchases_productId_fkey";

-- DropForeignKey
ALTER TABLE "productPurchases" DROP CONSTRAINT "productPurchases_purchaseId_fkey";

-- DropForeignKey
ALTER TABLE "productPurchases" DROP CONSTRAINT "productPurchases_updatedBy_fkey";

-- DropForeignKey
ALTER TABLE "productSales" DROP CONSTRAINT "productSales_createdBy_fkey";

-- DropForeignKey
ALTER TABLE "productSales" DROP CONSTRAINT "productSales_deletedBy_fkey";

-- DropForeignKey
ALTER TABLE "productSales" DROP CONSTRAINT "productSales_productId_fkey";

-- DropForeignKey
ALTER TABLE "productSales" DROP CONSTRAINT "productSales_saleId_fkey";

-- DropForeignKey
ALTER TABLE "productSales" DROP CONSTRAINT "productSales_updatedBy_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_createdBy_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_deletedBy_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_updatedBy_fkey";

-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_userId_fkey";

-- DropForeignKey
ALTER TABLE "purchases" DROP CONSTRAINT "purchases_createdBy_fkey";

-- DropForeignKey
ALTER TABLE "purchases" DROP CONSTRAINT "purchases_deletedBy_fkey";

-- DropForeignKey
ALTER TABLE "purchases" DROP CONSTRAINT "purchases_updatedBy_fkey";

-- DropForeignKey
ALTER TABLE "roles" DROP CONSTRAINT "roles_createdBy_fkey";

-- DropForeignKey
ALTER TABLE "roles" DROP CONSTRAINT "roles_deletedBy_fkey";

-- DropForeignKey
ALTER TABLE "roles" DROP CONSTRAINT "roles_updatedBy_fkey";

-- DropForeignKey
ALTER TABLE "sales" DROP CONSTRAINT "sales_createdBy_fkey";

-- DropForeignKey
ALTER TABLE "sales" DROP CONSTRAINT "sales_deletedBy_fkey";

-- DropForeignKey
ALTER TABLE "sales" DROP CONSTRAINT "sales_updatedBy_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_roleId_fkey";

-- AlterTable
ALTER TABLE "productPurchases" DROP CONSTRAINT "productPurchases_pkey",
ALTER COLUMN "productPurchaseId" DROP DEFAULT,
ALTER COLUMN "productPurchaseId" SET DATA TYPE TEXT,
ALTER COLUMN "productId" SET DATA TYPE TEXT,
ALTER COLUMN "purchaseId" SET DATA TYPE TEXT,
ALTER COLUMN "createdBy" SET DATA TYPE TEXT,
ALTER COLUMN "deletedBy" SET DATA TYPE TEXT,
ALTER COLUMN "updatedBy" SET DATA TYPE TEXT,
ADD CONSTRAINT "productPurchases_pkey" PRIMARY KEY ("productPurchaseId");
DROP SEQUENCE "productPurchases_productPurchaseId_seq";

-- AlterTable
ALTER TABLE "productSales" DROP CONSTRAINT "productSales_pkey",
ALTER COLUMN "productSaleId" DROP DEFAULT,
ALTER COLUMN "productSaleId" SET DATA TYPE TEXT,
ALTER COLUMN "productId" SET DATA TYPE TEXT,
ALTER COLUMN "saleId" SET DATA TYPE TEXT,
ALTER COLUMN "createdBy" SET DATA TYPE TEXT,
ALTER COLUMN "deletedBy" SET DATA TYPE TEXT,
ALTER COLUMN "updatedBy" SET DATA TYPE TEXT,
ADD CONSTRAINT "productSales_pkey" PRIMARY KEY ("productSaleId");
DROP SEQUENCE "productSales_productSaleId_seq";

-- AlterTable
ALTER TABLE "products" DROP CONSTRAINT "products_pkey",
ALTER COLUMN "productId" DROP DEFAULT,
ALTER COLUMN "productId" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ALTER COLUMN "createdBy" SET DATA TYPE TEXT,
ALTER COLUMN "deletedBy" SET DATA TYPE TEXT,
ALTER COLUMN "updatedBy" SET DATA TYPE TEXT,
ADD CONSTRAINT "products_pkey" PRIMARY KEY ("productId");
DROP SEQUENCE "products_productId_seq";

-- AlterTable
ALTER TABLE "purchases" DROP CONSTRAINT "purchases_pkey",
ALTER COLUMN "purchaseId" DROP DEFAULT,
ALTER COLUMN "purchaseId" SET DATA TYPE TEXT,
ALTER COLUMN "createdBy" SET DATA TYPE TEXT,
ALTER COLUMN "deletedBy" SET DATA TYPE TEXT,
ALTER COLUMN "updatedBy" SET DATA TYPE TEXT,
ALTER COLUMN "productId" SET DATA TYPE TEXT,
ADD CONSTRAINT "purchases_pkey" PRIMARY KEY ("purchaseId");
DROP SEQUENCE "purchases_purchaseId_seq";

-- AlterTable
ALTER TABLE "roles" DROP CONSTRAINT "roles_pkey",
ALTER COLUMN "roleId" DROP DEFAULT,
ALTER COLUMN "roleId" SET DATA TYPE TEXT,
ALTER COLUMN "createdBy" SET DATA TYPE TEXT,
ALTER COLUMN "deletedBy" SET DATA TYPE TEXT,
ALTER COLUMN "updatedBy" SET DATA TYPE TEXT,
ADD CONSTRAINT "roles_pkey" PRIMARY KEY ("roleId");
DROP SEQUENCE "roles_roleId_seq";

-- AlterTable
ALTER TABLE "sales" DROP CONSTRAINT "sales_pkey",
ALTER COLUMN "saleId" DROP DEFAULT,
ALTER COLUMN "saleId" SET DATA TYPE TEXT,
ALTER COLUMN "createdBy" SET DATA TYPE TEXT,
ALTER COLUMN "deletedBy" SET DATA TYPE TEXT,
ALTER COLUMN "updatedBy" SET DATA TYPE TEXT,
ADD CONSTRAINT "sales_pkey" PRIMARY KEY ("saleId");
DROP SEQUENCE "sales_saleId_seq";

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "name",
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "profilePictureUrl" TEXT,
ADD COLUMN     "surName" TEXT,
ALTER COLUMN "userId" DROP DEFAULT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ALTER COLUMN "roleId" SET DATA TYPE TEXT,
ALTER COLUMN "createdBy" SET DATA TYPE TEXT,
ALTER COLUMN "deletedBy" SET DATA TYPE TEXT,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("userId");
DROP SEQUENCE "users_userId_seq";

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("roleId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles" ADD CONSTRAINT "roles_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles" ADD CONSTRAINT "roles_deletedBy_fkey" FOREIGN KEY ("deletedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles" ADD CONSTRAINT "roles_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_deletedBy_fkey" FOREIGN KEY ("deletedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_deletedBy_fkey" FOREIGN KEY ("deletedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_deletedBy_fkey" FOREIGN KEY ("deletedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productPurchases" ADD CONSTRAINT "productPurchases_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productPurchases" ADD CONSTRAINT "productPurchases_deletedBy_fkey" FOREIGN KEY ("deletedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productPurchases" ADD CONSTRAINT "productPurchases_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productPurchases" ADD CONSTRAINT "productPurchases_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productPurchases" ADD CONSTRAINT "productPurchases_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "purchases"("purchaseId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productSales" ADD CONSTRAINT "productSales_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productSales" ADD CONSTRAINT "productSales_deletedBy_fkey" FOREIGN KEY ("deletedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productSales" ADD CONSTRAINT "productSales_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "users"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productSales" ADD CONSTRAINT "productSales_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productSales" ADD CONSTRAINT "productSales_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "sales"("saleId") ON DELETE RESTRICT ON UPDATE CASCADE;
