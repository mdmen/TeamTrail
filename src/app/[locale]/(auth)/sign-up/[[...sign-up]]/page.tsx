import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div>
      <h1>Sign Up page</h1>
      <SignUp path="/en/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
}
