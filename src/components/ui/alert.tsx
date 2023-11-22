import { Info, AlertCircle, Check, X, type LucideIcon } from 'lucide-react';

type AlertType = 'info' | 'success' | 'warning' | 'error';

interface AlertItem {
  icon: LucideIcon;
  innerColor: string;
  outerColor: string;
  innerColorDark: string;
  outerColorDark: string;
}

const map: Record<AlertType, AlertItem> = {
  success: {
    icon: Check,
    innerColor: 'bg-[--green-400]',
    outerColor: 'bg-[--green-100]',
    innerColorDark: 'dark:bg-[--green-600]',
    outerColorDark: 'dark:bg-[--green-800]',
  },
  info: {
    icon: Info,
    innerColor: 'bg-[--primary-400]',
    outerColor: 'bg-[--primary-100]',
    innerColorDark: 'dark:bg-[--primary-600]',
    outerColorDark: 'dark:bg-[--primary-800]',
  },
  warning: {
    icon: AlertCircle,
    innerColor: 'bg-[--orange-400]',
    outerColor: 'bg-[--orange-100]',
    innerColorDark: 'dark:bg-[--orange-600]',
    outerColorDark: 'dark:bg-[--orange-800]',
  },
  error: {
    icon: X,
    innerColor: 'bg-[--red-400]',
    outerColor: 'bg-[--red-100]',
    innerColorDark: 'dark:bg-[--red-600]',
    outerColorDark: 'dark:bg-[--red-800]',
  },
};

interface AlertProps {
  type?: AlertType;
}

export function Alert({ type = 'info' }: AlertProps) {
  const {
    icon: IconComponent,
    innerColor,
    outerColor,
    innerColorDark,
    outerColorDark,
  } = map[type];

  return (
    <div className="flex justify-center text-[--gray-50]">
      <div className={`${outerColor} ${outerColorDark} rounded-full p-4`}>
        <div className={`${innerColor} ${innerColorDark} rounded-full p-4`}>
          <IconComponent size="4rem" strokeWidth={1.5} aria-hidden />
        </div>
      </div>
    </div>
  );
}
