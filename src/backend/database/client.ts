import { PrismaClient } from "@prisma/client";

const global_: any = global;

// Specjalnie takie brzydkie ;)
const prisma: PrismaClient =
  (process.env.NODE_ENV === "production" && new PrismaClient()) ||
  (!global_.prisma && new PrismaClient(), global_.prisma);

console.log(prisma);
export { prisma as client };
