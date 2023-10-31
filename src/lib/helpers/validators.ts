import { z, type ZodString } from 'zod';

export function getEmailValidator() {
  return z.string().email('form.email.invalid');
}

export function getPasswordValidator() {
  return getRequiredStringValidator({ min: 8 });
}

interface RequiredStringValidatorParams {
  str?: ZodString;
  min?: number;
}

export function getRequiredStringValidator({
  str = z.string(),
  min = 1,
}: RequiredStringValidatorParams = {}) {
  return str.trim().min(min, 'form.required');
}

interface OptionalStringValidatorParams extends RequiredStringValidatorParams {}

export function getOptionalStringValidator(
  args?: OptionalStringValidatorParams,
) {
  return getRequiredStringValidator(args).or(z.literal(''));
}
