import Image from 'next/image';
import { Image as ImageIcon } from 'lucide-react';

interface WorkspaceImageProps {
  src?: string;
}

export function WorkspaceImage({ src }: WorkspaceImageProps) {
  return (
    <div className="grid aspect-square shrink-0 grow overflow-hidden rounded-lg bg-[--surface-d] lg:w-20 lg:grow-0">
      {src ? (
        <Image
          src={src}
          className="h-full w-full object-cover"
          width={70}
          height={70}
          alt=""
        />
      ) : (
        <ImageIcon
          size="3rem"
          className="m-auto text-[--bluegray-500]"
          aria-hidden
        />
      )}
    </div>
  );
}
