-- AlterTable
ALTER TABLE "customers" ALTER COLUMN "customerId" SET DEFAULT ('usr_' || gen_random_uuid())::text;

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
CREATE TABLE "_CustomerOwnedProducts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CustomerOwnedProducts_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CustomerOwnedProducts_B_index" ON "_CustomerOwnedProducts"("B");

-- AddForeignKey
ALTER TABLE "_CustomerOwnedProducts" ADD CONSTRAINT "_CustomerOwnedProducts_A_fkey" FOREIGN KEY ("A") REFERENCES "customers"("customerId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CustomerOwnedProducts" ADD CONSTRAINT "_CustomerOwnedProducts_B_fkey" FOREIGN KEY ("B") REFERENCES "products"("productId") ON DELETE CASCADE ON UPDATE CASCADE;
