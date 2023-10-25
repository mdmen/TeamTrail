import z from 'zod';
import { envCommonSchema } from './common';

const schema = z.object({});

const parsed = schema.safeParse({});

if (!parsed.success) {
  console.error(parsed.error.issues);
  throw Error('There is an error with the environment variables');
}

export const envServerSchema = { ...envCommonSchema, ...parsed.data };
