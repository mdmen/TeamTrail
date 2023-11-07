import { z } from 'zod';
import {
  getRequiredStringValidator,
  getPasswordValidator,
} from '@/lib/helpers';

export enum FormFields {
  IDENTIFIER = 'identifier',
  PASSWORD = 'password',
}

export const formSchema = z.object({
  [FormFields.IDENTIFIER]: getRequiredStringValidator({ min: 3 }),
  [FormFields.PASSWORD]: getPasswordValidator(),
});

export type FormSignInFields = z.infer<typeof formSchema>;

export const initialValues: FormSignInFields = {
  [FormFields.IDENTIFIER]: '',
  [FormFields.PASSWORD]: '',
};
