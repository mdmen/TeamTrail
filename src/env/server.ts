import z from 'zod';
import { envCommonSchema } from './common';

const schema = z.object({
  AUTH_GITHUB_ID: z.string().trim().min(1),
  AUTH_GITHUB_SECRET: z.string().trim().min(1),
  AUTH_GOOGLE_ID: z.string().trim().min(1),
  AUTH_GOOGLE_SECRET: z.string().trim().min(1),
});

const parsed = schema.safeParse({
  AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID,
  AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,
  AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
  AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
});

if (!parsed.success) {
  console.error(parsed.error.issues);
  throw Error('There is an error with the environment variables');
}

export const envServerSchema = { ...envCommonSchema, ...parsed.data };
