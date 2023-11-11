import { z } from 'zod';
import { getRequiredStringValidator } from '@/lib/helpers';

export enum FormFields {
  USERNAME = 'username',
}

export const formSchema = z.object({
  [FormFields.USERNAME]: getRequiredStringValidator({ min: 3 }),
});

export type FormMissingFields = z.infer<typeof formSchema>;

export const initialValues: FormMissingFields = {
  [FormFields.USERNAME]: '',
};
