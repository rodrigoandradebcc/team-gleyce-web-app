import React, {
  forwardRef,
  ForwardRefRenderFunction,
  TextareaHTMLAttributes,
} from 'react';
import { Container } from './styles';

interface InputTextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

const InputTextAreaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  InputTextAreaProps
> = ({ name, ...rest }: InputTextAreaProps, ref) => {
  return <Container id={name} ref={ref} name={name} {...rest} />;
};

export const InputTextArea = forwardRef(InputTextAreaBase);
