-- CreateTable
CREATE TABLE "Todo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "task" TEXT NOT NULL DEFAULT '-',
    "done" BOOLEAN NOT NULL DEFAULT false
);
