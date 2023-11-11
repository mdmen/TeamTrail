import { z } from 'zod';
import {
  getEmailValidator,
  getPasswordValidator,
  getOptionalStringValidator,
  getRequiredStringValidator,
} from '@/lib/helpers';

export enum FormFields {
  FIRSTNAME = 'firstname',
  LASTNAME = 'lastname',
  USERNAME = 'username',
  EMAIL = 'email',
  PASSWORD = 'password',
}

export const formSchema = z.object({
  [FormFields.USERNAME]: getRequiredStringValidator({ min: 3 }),
  [FormFields.EMAIL]: getEmailValidator(),
  [FormFields.PASSWORD]: getPasswordValidator(),
  [FormFields.FIRSTNAME]: getOptionalStringValidator(),
  [FormFields.LASTNAME]: getOptionalStringValidator(),
});

export type FormSignUpFields = z.infer<typeof formSchema>;

export const initialValues: FormSignUpFields = {
  [FormFields.USERNAME]: '',
  [FormFields.EMAIL]: '',
  [FormFields.PASSWORD]: '',
  [FormFields.FIRSTNAME]: '',
  [FormFields.LASTNAME]: '',
};
