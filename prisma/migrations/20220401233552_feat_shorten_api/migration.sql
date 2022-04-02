-- CreateTable
CREATE TABLE "Link" (
    "idx" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Link_idx_key" ON "Link"("idx");
