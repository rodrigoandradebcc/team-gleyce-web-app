import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const NewInputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, ...rest }: InputProps,
  ref,
) => {
  return (
    <Container>
      {/* {Icon && <Icon size={20} />} */}

      <input id={name} ref={ref} name={name} {...rest} />
    </Container>
  );
};

export const NewInput = forwardRef(NewInputBase);
