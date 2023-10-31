import { z } from 'zod';
import { getRequiredStringValidator } from '@/lib/helpers';

export enum FormFields {
  CODE = 'code',
}

export const formSchema = z.object({
  [FormFields.CODE]: getRequiredStringValidator(),
});

export type FormVerifyFields = z.infer<typeof formSchema>;

export const initialValues: FormVerifyFields = {
  [FormFields.CODE]: '',
};
