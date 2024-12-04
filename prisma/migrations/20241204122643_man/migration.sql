/*
  Warnings:

  - A unique constraint covering the columns `[slot]` on the table `Availability` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Availability_slot_key" ON "Availability"("slot");
