import z from 'zod';

const schema = z.object({
  NODE_ENV: z.union([z.literal('development'), z.literal('production')]),
  API_URL: z.string().trim().min(8),
  CLERK_PUBLISHABLE_KEY: z.string().trim().min(1),
  SIGN_IN_URL: z.string().trim().min(1),
  SIGN_UP_URL: z.string().trim().min(1),
  AFTER_SIGN_IN_URL: z.string().trim().min(1),
  AFTER_SIGN_UP_URL: z.string().trim().min(1),
  OAUTH_CALLBACK_URL: z.string().trim().min(1),
});

const parsed = schema.safeParse({
  NODE_ENV: process.env.NODE_ENV,
  API_URL: process.env.NEXT_PUBLIC_API_URL,
  CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
  SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
  AFTER_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL,
  AFTER_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL,
  OAUTH_CALLBACK_URL: process.env.NEXT_PUBLIC_CLERK_OAUTH_CALLBACK_URL,
});

if (!parsed.success) {
  console.error(parsed.error.issues);
  throw Error('There is an error with the common environment variables');
}

export const envPublicSchema = parsed.data;
