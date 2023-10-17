import { PrismaClient } from '@prisma/client';
import { isProduction } from '../helpers';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (!isProduction) globalForPrisma.prisma = prisma;
