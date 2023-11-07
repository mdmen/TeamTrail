import { Button, type ButtonProps } from 'primereact/button';
import { GoogleIcon, GithubIcon } from '@/components/icons';
import { cn } from '@/lib/helpers';

type BrandNames = 'google' | 'github';

interface BrandItem {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  label: string;
}

const icons: Record<BrandNames, BrandItem> = {
  google: {
    icon: GoogleIcon,
    label: 'Google',
  },
  github: {
    icon: GithubIcon,
    label: 'GitHub',
  },
};

interface LogoButtonProps extends ButtonProps {
  brand: BrandNames;
  fullWidth?: boolean;
  withoutLabel?: boolean;
}

export function BrandButton({
  brand,
  type = 'button',
  withoutLabel,
  fullWidth,
  children,
  className,
  ...props
}: LogoButtonProps) {
  const { icon, label } = icons[brand];
  const fullWidthClasses = fullWidth
    ? ['w-full', 'justify-center', '[&>.p-button-label]:grow-0']
    : '';

  return (
    <Button
      {...props}
      className={cn(fullWidthClasses, className)}
      label={withoutLabel ? undefined : label}
      icon={({ iconProps }) => {
        const IconComponent = icon;
        return <IconComponent className={iconProps.className} />;
      }}
      type={type}
    >
      {children}
    </Button>
  );
}
