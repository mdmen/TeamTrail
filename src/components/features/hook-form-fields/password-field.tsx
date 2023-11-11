import { Controller, type Control, type Path } from 'react-hook-form';
import { useI18n } from '@/locales/client';
import { cn } from '@/lib/helpers';
import { Password } from '@/components/ui';
import { FloatLabel } from '@/components/layouts';

interface FormFieldPasswordProps<TFields extends {}> {
  name: Path<TFields>;
  required?: boolean;
  feedback?: boolean;
  disabled?: boolean;
  control: Control<TFields>;
}

export function FormFieldPassword<TFields extends {}>({
  name,
  required,
  feedback,
  control,
  disabled,
}: FormFieldPasswordProps<TFields>) {
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
