import { PrismaClient } from "@prisma/client";

const global_: any = global;

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global_.prisma) global_.prisma = new PrismaClient();
  prisma = global_.prisma;
}

console.log(prisma);
export { prisma as client };
