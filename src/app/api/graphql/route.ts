import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { NextRequest } from 'next/server';
import { loadFilesSync } from '@graphql-tools/load-files';
import { prisma } from '@/lib/prisma/client';
import { resolvers } from '@/lib/apollo/resolvers';

const server = new ApolloServer({
  typeDefs: loadFilesSync('./src/lib/apollo/schema/**/*.graphql'),
  resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req, res) => ({ req, res, prisma }),
});

export { handler as GET, handler as POST };
