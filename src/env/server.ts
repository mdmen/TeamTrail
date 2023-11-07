import z from 'zod';

const schema = z.object({
  CLERK_SECRET_KEY: z.string().trim().min(1),
});

const parsed = schema.safeParse({
  CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
});

if (!parsed.success) {
  console.error(parsed.error.issues);
  throw Error('There is an error with the server environment variables');
}

export const envServerSchema = parsed.data;
