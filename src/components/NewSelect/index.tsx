import React, {
  forwardRef,
  ForwardRefRenderFunction,
  SelectHTMLAttributes,
} from 'react';

import { Container, Select, Option } from './styles';

interface OptionProps {
  label: string;
  value: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  values: OptionProps[];
  name: string;
}

const NewSelectBase: ForwardRefRenderFunction<
  HTMLSelectElement,
  SelectProps
> = ({ values, ...rest }: SelectProps, ref) => {
  return (
    <Container>
      <Select ref={ref} {...rest}>
        {values.map(option => (
          <Option value={option.label}>{option.value}</Option>
        ))}
      </Select>
    </Container>
  );
};

export const NewSelect = forwardRef(NewSelectBase);
