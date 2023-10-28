import { ProgressSpinner } from 'primereact/progressspinner';
import { cn } from '@/lib/helpers';

interface SpinnerProps {
  fullscreen?: boolean;
}

export function Spinner({ fullscreen }: SpinnerProps) {
  const fullscreenClasses = fullscreen
    ? ['fixed', 'z-50', 'bg-[--surface-ground]']
    : '';

  return (
    <div className={cn('grid', 'h-full', 'w-full', fullscreenClasses)}>
      <ProgressSpinner className="m-auto h-20 w-20" />
    </div>
  );
}
