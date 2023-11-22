import { Controller, type Control, type Path } from 'react-hook-form';
import { useI18n } from '@/locales/client';
import { cn } from '@/lib/helpers';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from '@/components/layouts';

interface FormFieldTextProps<TFields extends {}> {
  name: Path<TFields>;
  label: string;
  minLength?: number;
  required?: boolean;
  disabled?: boolean;
  autoComplete?: string;
  autoFocus?: boolean;
  type?: 'text' | 'email';
  control: Control<TFields>;
}

export function FormFieldText<TFields extends {}>({
  name,
  type = 'text',
  autoFocus,
  disabled,
  minLength = 0,
  required,
  autoComplete,
  label,
  control,
}: FormFieldTextProps<TFields>) {
  const t = useI18n();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div>
          <FloatLabel htmlFor={field.name} label={label}>
            <InputText
              id={field.name}
              value={field.value}
              type={type}
              autoComplete={autoComplete}
              disabled={disabled}
              autoFocus={autoFocus}
              className={cn({ 'p-invalid': fieldState.error })}
              aria-invalid={fieldState.error ? 'true' : 'false'}
              aria-errormessage={
                fieldState.error ? `${field.name}-error` : undefined
              }
              aria-required={required}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                field.onChange(e.target.value)
              }
            />
          </FloatLabel>
          {!!fieldState.error && (
            <span id={`${field.name}-error`} className={cn('p-error')}>
              {t(fieldState.error.message as 'form.required', {
                count: minLength,
              })}
            </span>
          )}
        </div>
      )}
    />
  );
}
