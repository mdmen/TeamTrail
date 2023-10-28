import { z } from 'zod';
import { CommonAuthFields, commonAuthSchema } from './common';

export enum SignUpFields {
  FIRSTNAME = 'firstname',
  LASTNAME = 'lastname',
}

export const formSignUpSchema = commonAuthSchema.extend({
  [SignUpFields.FIRSTNAME]: z
    .string()
    .trim()
    .min(1, { message: 'form.name.minLength' })
    .or(z.literal('')),
  [SignUpFields.LASTNAME]: z
    .string()
    .trim()
    .min(1, { message: 'form.name.minLength' })
    .or(z.literal('')),
});

export type FormSignUpFields = z.infer<typeof formSignUpSchema>;

export const initialSignUpValues: FormSignUpFields = {
  [CommonAuthFields.USERNAME]: '',
  [CommonAuthFields.EMAIL]: '',
  [CommonAuthFields.PASSWORD]: '',
  [SignUpFields.FIRSTNAME]: '',
  [SignUpFields.LASTNAME]: '',
};
