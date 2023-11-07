import { z } from 'zod';
import { getEmailValidator } from '@/lib/helpers';

export enum FormFields {
  EMAIL = 'email',
}

export const formSchema = z.object({
  [FormFields.EMAIL]: getEmailValidator(),
});

export type FormSignInFields = z.infer<typeof formSchema>;

export const initialValues: FormSignInFields = {
  [FormFields.EMAIL]: '',
};
