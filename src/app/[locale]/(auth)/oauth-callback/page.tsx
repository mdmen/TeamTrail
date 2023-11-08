import { AuthenticateWithRedirectCallback } from '@clerk/nextjs';
import { Spinner } from '@/components/ui';

export default function OAuthCallbackPage() {
  return (
    <>
      <Spinner fullscreen />
      <AuthenticateWithRedirectCallback
        // Intentionally redirect to Sign Up page
        // because we need to create a database user
        afterSignUpUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL}
        afterSignInUrl={process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL}
        continueSignUpUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL}
        verifyEmailAddressUrl={process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL}
      />
    </>
  );
}
