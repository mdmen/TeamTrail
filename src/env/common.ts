import z from 'zod';

const schema = z.object({
  NODE_ENV: z.union([z.literal('development'), z.literal('production')]),
  SITE_URL: z.string().trim().min(8),
});

const parsed = schema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
  SITE_URL: process.env.SITE_URL,
});

if (!parsed.success) {
  console.error(parsed.error.issues);
  throw Error('There is an error with the common environment variables');
}

export const envCommonSchema = parsed.data;
