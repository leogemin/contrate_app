import { TextField as RadixTextField } from '@radix-ui/themes';
import type { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import './TextField.scss';

type TextFieldProps = React.ComponentPropsWithoutRef<typeof RadixTextField.Root> & {
  name: string;
  icon?: ReactNode;
  placeholder?: string;
};

export const CustomTextField = ({ name, icon, ...props }: TextFieldProps) => {
  const { register } = useFormContext();

  return (
    <div className="text-field">
      {icon && <span className="text-field__icon">{icon}</span>}
      <RadixTextField.Root {...props} {...register(name)} />
    </div>
  );
};
