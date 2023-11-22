export type WorkspaceStatus = 'public' | 'private';

export interface Workspace {
  code: string;
  name: string;
  status: WorkspaceStatus;
  description?: string;
  image?: string;
}
