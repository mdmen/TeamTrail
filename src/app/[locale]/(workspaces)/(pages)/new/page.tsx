import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create workspace',
};

export default function WorkspacesPage() {
  return (
    <div className="text-center">
      <h1>You have no workspaces right now</h1>
      <p className="text-xl">But you can join an existing workspace</p>
    </div>
  );
}
