import { z } from 'zod';
import {
  getRequiredStringValidator,
  getPasswordValidator,
} from '@/lib/helpers';

export enum FormFields {
  CODE = 'code',
  PASSWORD = 'password',
}

export const formSchema = z.object({
  [FormFields.CODE]: getRequiredStringValidator(),
  [FormFields.PASSWORD]: getPasswordValidator(),
});

export type FormSignInFields = z.infer<typeof formSchema>;

export const initialValues: FormSignInFields = {
  [FormFields.CODE]: '',
  [FormFields.PASSWORD]: '',
};
