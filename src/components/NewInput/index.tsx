import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useCallback,
  useState,
} from 'react';
import { FieldError } from 'react-hook-form';
import { IconBaseProps } from 'react-icons';
import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  error?: FieldError;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const NewInputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error, defaultValue, ...rest }: InputProps,
  ref,
) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <>
      <Container isErrored={!!error} isFocused={isFocused}>
        {/* {Icon && <Icon size={20} />} */}

        <input
          id={name}
          ref={ref}
          name={name}
          defaultValue={defaultValue}
          {...rest}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </Container>
      {error && <Error>{error.message}</Error>}
    </>
  );
};

export const NewInput = forwardRef(NewInputBase);
