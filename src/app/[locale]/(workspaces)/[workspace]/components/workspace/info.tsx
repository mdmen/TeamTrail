import { Tag, Tooltip } from '@/components/ui';

interface WorkspaceInfoProps {
  name: string;
  role: string;
  status: string;
  membersCount: number;
}

export function WorkspaceInfo({
  name,
  status,
  membersCount,
  role,
}: WorkspaceInfoProps) {
  return (
    <div className="flex max-w-sm flex-col gap-2">
      <span className="line-clamp-3 break-words text-lg font-bold leading-tight">
        {name}
      </span>
      <div className="flex flex-wrap gap-1">
        <Tooltip target=".js-workspace-tag" />
        <Tag
          className="js-workspace-tag"
          data-pr-tooltip="Your current role"
          role="status"
          aria-label="Your current role"
          severity="danger"
          value={role}
        />
        <Tag
          className="js-workspace-tag"
          data-pr-tooltip="Everyone can join this workspace"
          severity="warning"
          role="status"
          aria-label="Everyone can join this workspace"
          value={status}
        />
        <Tag value={`${membersCount} members`} role="status" />
      </div>
    </div>
  );
}
