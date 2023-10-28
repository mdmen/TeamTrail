import { Skeleton } from '@/components/ui';
import { cn } from '@/lib/helpers';

interface FormRowProps extends React.PropsWithChildren {
  noMargin?: boolean;
  multipleRowFields?: boolean;
}

export function FormRow({
  noMargin,
  multipleRowFields,
  children,
}: FormRowProps) {
  const multipleFieldClasses = multipleRowFields
    ? [
        'flex',
        'flex-wrap',
        'gap-4',
        '[&>*]:grow',
        '[&>*]:w-1/2',
        'justify-between',
        'sm:flex-nowrap',
      ]
    : '';

  return (
    <div
      className={cn(
        multipleFieldClasses,
        { 'mb-6': !noMargin },
        'w-full',
        '[&_.p-inputtext]:w-full',
        '[&_.p-inputwrapper]:w-full',
        'last:mb-0',
      )}
    >
      {children}
    </div>
  );
}

interface FormSkeletonProps {
  rows?: number;
}

export function FormSkeleton({ rows = 2 }: FormSkeletonProps) {
  return Array.from({ length: rows }).map((_, index) => {
    return (
      <Skeleton
        key={index}
        height="2.9rem"
        className={index < rows - 1 ? 'mb-6' : ''}
      />
    );
  });
}
