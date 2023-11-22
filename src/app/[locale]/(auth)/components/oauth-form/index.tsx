import type {
  SignUpResource,
  SignInResource,
  OAuthStrategy,
} from '@clerk/types';
import { Button } from 'primereact/button';
import { GoogleIcon, GithubIcon } from '@/components/icons';
import { FormRow } from '@/components/layouts';
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
        <Button
          className="w-full justify-center [&>.p-button-label]:grow-0"
          onClick={() => authWith('oauth_github')}
          label="GitHub"
          type="button"
          severity="secondary"
          outlined
          icon={({ iconProps }) => {
            return <GithubIcon className={iconProps.className} />;
          }}
        />
      </FormRow>
      <FormRow margin="none">
        <Button
          className="w-full justify-center [&>.p-button-label]:grow-0"
          onClick={() => authWith('oauth_google')}
          label="Google"
          type="button"
          severity="secondary"
          outlined
          icon={({ iconProps }) => {
            return <GoogleIcon className={iconProps.className} />;
          }}
        />
      </FormRow>
    </>
  );
}
