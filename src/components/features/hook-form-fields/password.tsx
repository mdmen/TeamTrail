import { Controller, type Control, type Path } from 'react-hook-form';
import { useI18n } from '@/locales/client';
import { cn } from '@/lib/helpers';
import { Password, FloatLabel } from '@/components/ui';

interface SingUpFormPasswordProps<TFields extends {}> {
  name: Path<TFields>;
  required?: boolean;
  feedback?: boolean;
  disabled?: boolean;
  control: Control<TFields>;
}

export function SignUpFormPassword<TFields extends {}>({
  name,
  required,
  feedback,
  control,
  disabled,
}: SingUpFormPasswordProps<TFields>) {
  const t = useI18n();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <>
          <FloatLabel htmlFor={field.name} label={t('form.password.label')}>
            <Password
              inputId={field.name}
              value={field.value}
              className={cn({ 'p-invalid': fieldState.error })}
              aria-invalid={fieldState.error ? 'true' : 'false'}
              aria-errormessage={
                fieldState.error ? `${field.name}-error` : undefined
              }
              aria-required={required}
              autoComplete="current-password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                field.onChange(e.target.value)
              }
              disabled={disabled}
              feedback={feedback}
              promptLabel={feedback ? t('form.password.prompt') : undefined}
              weakLabel="Too simple"
              mediumLabel="Average complexity"
              strongLabel="Complex password"
              toggleMask
            />
          </FloatLabel>
          {!!fieldState.error && (
            <span id={`${field.name}-error`} className={cn('p-error')}>
              {t(fieldState.error.message as 'form.required', {
                count: 8,
              })}
            </span>
          )}
        </>
      )}
    />
  );
}
