import { cn } from '@/lib/helpers';

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
