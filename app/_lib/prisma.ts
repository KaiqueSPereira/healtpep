import { PrismaClient } from "@prisma/client";

declare global {
    var cachePrisma: PrismaClient
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  // No ambiente de produç?o, criamos uma nova instância sempre.
  prisma = new PrismaClient();
} else {
  // No ambiente de desenvolvimento, usamos cache para evitar múltiplas conex?es.
  if (!global.cachePrisma) {
    global.cachePrisma = new PrismaClient();
  }
  prisma = global.cachePrisma;
}

export const db = prisma