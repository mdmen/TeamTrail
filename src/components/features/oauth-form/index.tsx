import type {
  SignUpResource,
  SignInResource,
  OAuthStrategy,
} from '@clerk/types';
import { FormRow, BrandButton } from '@/components/ui';
import { envPublicSchema } from '@/env/public';

type OAuthFormProps =
  | {
      type: 'signUp';
      auth: SignUpResource;
    }
  | {
      type: 'signIn';
      auth: SignInResource;
    };

export function OAuthForm({ type, auth }: OAuthFormProps) {
  const authWith = (strategy: OAuthStrategy) => {
    return auth.authenticateWithRedirect({
      strategy,
      redirectUrl: envPublicSchema.OAUTH_CALLBACK_URL,
      redirectUrlComplete:
        type === 'signUp'
          ? envPublicSchema.AFTER_SIGN_UP_URL
          : envPublicSchema.AFTER_SIGN_IN_URL,
    });
  };

  return (
    <>
      <FormRow margin="small">
        <BrandButton
          brand="github"
          onClick={() => authWith('oauth_github')}
          severity="secondary"
          fullWidth
          outlined
        />
      </FormRow>
      <FormRow margin="none">
        <BrandButton
          brand="google"
          onClick={() => authWith('oauth_google')}
          severity="secondary"
          fullWidth
          outlined
        />
      </FormRow>
    </>
  );
}
