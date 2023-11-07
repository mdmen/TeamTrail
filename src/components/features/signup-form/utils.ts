import type { SignUpResource } from '@clerk/types';

export function shouldVerifyEmailByCode(signUp?: SignUpResource) {
  if (!signUp) return false;

  return (
    signUp.status === 'missing_requirements' &&
    signUp.verifications.emailAddress.status === 'unverified' &&
    signUp.verifications.emailAddress.strategy === 'email_code'
  );
}

export function shouldFillMissingFields(signUp?: SignUpResource) {
  if (!signUp) return false;

  return (
    signUp.status === 'missing_requirements' && signUp.missingFields.length > 0
  );
}
