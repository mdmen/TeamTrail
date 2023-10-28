import { z } from 'zod';

export enum VerifyFields {
  CODE = 'code',
}

export const formVerifySchema = z.object({
  [VerifyFields.CODE]: z.string().trim().min(1, {
    message: 'form.code.minLength',
  }),
});

export type FormVerifyFields = z.infer<typeof formVerifySchema>;

export const initialVerifyValues: FormVerifyFields = {
  [VerifyFields.CODE]: '',
};
