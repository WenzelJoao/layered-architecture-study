import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = `postgresql://postgres:123@localhost:5432/evento?schema=public`;

const adapter = new PrismaPg({ connectionString });
export const prisma = new PrismaClient({ adapter, log: ['query'] });
