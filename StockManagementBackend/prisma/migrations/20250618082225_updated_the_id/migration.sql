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
