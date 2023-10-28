import { z } from 'zod';

export enum CommonAuthFields {
  USERNAME = 'username',
  EMAIL = 'email',
  PASSWORD = 'password',
}

export const commonAuthSchema = z.object({
  [CommonAuthFields.USERNAME]: z.string().trim().min(3, {
    message: 'form.username.minLength',
  }),
  [CommonAuthFields.EMAIL]: z.string().email({
    message: 'form.email.invalid',
  }),
  [CommonAuthFields.PASSWORD]: z.string().min(8, {
    message: 'form.password.minLength',
  }),
});
