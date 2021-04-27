import React from 'react';

import { Select } from './styles';

interface Option {
  label: string;
  value: string;
}

interface InputSelectProps {
  options: Option[];
  isClearable?: boolean;
  isMulti?: boolean;
  placeholder?: string;
  required?: boolean;
  setPlanSelected: (value: string) => void;
}

const InputSelect: React.FC<InputSelectProps> = ({
  options,
  setPlanSelected,
  placeholder = 'Selecione...',
  isClearable,
  isMulti,
  required,
  ...props
}) => {
  return (
    <Select
      options={options}
      onChange={(option: Option) => {
        if (option) {
          setPlanSelected(option.value);
        } else {
          setPlanSelected('');
        }
      }}
      isClearable={isClearable}
      placeholder={placeholder}
      isMulti={isMulti}
      required={required}
      {...props}
    />
  );
};

export default InputSelect;
