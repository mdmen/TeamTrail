import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div>
      <h1>Sign-in page</h1>
      <SignIn path="/en/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
}
