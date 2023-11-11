import Image from 'next/image';
import Link from 'next/link';
import { Image as ImageIcon } from '@/components/icons';
import { Tag, Tooltip } from '@/components/ui';

const src =
  'https://primefaces.org/cdn/primereact/images/galleria/galleria14s.jpg';

export function Workspace() {
  return (
    <div className="flex items-start gap-3">
      <Link
        href="/workspace/123"
        className="grid h-20 w-20 shrink-0 grow-0 overflow-hidden rounded-lg bg-[--surface-d] shadow-md hover:[&>img]:scale-110"
      >
        {src ? (
          <Image
            src={src}
            className="h-full min-w-full max-w-none object-cover transition-transform"
            width={70}
            height={70}
            alt=""
          />
        ) : (
          <ImageIcon
            width="3rem"
            height="3rem"
            className="m-auto text-[--bluegray-500]"
            aria-hidden
          />
        )}
      </Link>
      <div className="flex flex-col gap-2">
        <span className="break-words text-lg font-bold leading-tight">
          Awesome workspace workspace
        </span>
        <div className="flex flex-wrap gap-1">
          <Tooltip target=".js-workspace-tag" />
          <Tag
            className="js-workspace-tag"
            data-pr-tooltip="Your current role"
            severity="danger"
            value="Admin"
          />
          <Tag
            className="js-workspace-tag"
            data-pr-tooltip="Everyone can join this workspace"
            severity="warning"
            value="Public"
          />
          <Tag value="19 members" />
        </div>
      </div>
    </div>
  );
}
