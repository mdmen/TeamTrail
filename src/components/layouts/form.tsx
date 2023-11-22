import { Skeleton } from 'primereact/skeleton';
import { cn } from '@/lib/helpers';

interface FormRowProps extends React.PropsWithChildren {
  margin?: 'none' | 'small' | 'large';
  multipleRowFields?: boolean;
}

export function FormRow({
  margin = 'large',
  multipleRowFields,
  children,
}: FormRowProps) {
  const multipleFieldClasses = multipleRowFields
    ? 'flex flex-wrap gap-4 [&>*]:grow [&>*]:w-1/2 justify-between sm:flex-nowrap'
    : '';

  return (
    <div
      className={cn(
        multipleFieldClasses,
        { 'mb-6': margin === 'large', 'mb-3': margin === 'small' },
        'w-full last:mb-0 [&_.p-inputtext]:w-full [&_.p-inputwrapper]:w-full',
      )}
    >
      {children}
    </div>
  );
}

export function FormSkeleton({ rows = 2 }: { rows?: number }) {
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

interface FloatLabelProps extends React.PropsWithChildren {
  label: string;
  classNames?: string[] | string;
  htmlFor?: string;
}

export const FloatLabel = ({
  label,
  htmlFor,
  classNames,
  children,
}: FloatLabelProps) => {
  return (
    <span className={cn('p-float-label', classNames)}>
      {children}
      <label htmlFor={htmlFor}>{label}</label>
    </span>
  );
};
