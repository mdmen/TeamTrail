import type { NextRequest, NextResponse } from 'next/server';
import type { PrismaClient } from '@prisma/client';

export interface ApolloContext {
  req: NextRequest;
  res: NextResponse;
  prisma: PrismaClient;
}
