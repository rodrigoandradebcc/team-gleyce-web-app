import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FieldError } from 'react-hook-form';
import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  error?: FieldError;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const NewInputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error, ...rest }: InputProps,
  ref,
) => {
  return (
    <>
      <Container isErrored={!!error}>
        {/* {Icon && <Icon size={20} />} */}

        <input id={name} ref={ref} name={name} {...rest} />
      </Container>
      {error && <Error>{error.message}</Error>}
    </>
  );
};

export const NewInput = forwardRef(NewInputBase);
