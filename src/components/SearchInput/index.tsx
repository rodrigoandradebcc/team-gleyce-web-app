import React, { InputHTMLAttributes, useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { Container } from './styles';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ name, type, ...rest }) => {
  const [value, setValue] = useState('');
  const input = useRef<HTMLInputElement>(null);

  function changeValue(): void {
    setValue(input.current?.value as string);
  }

  function toggleFocus(): void {
    input.current?.focus();
  }

  return (
    <Container onClick={toggleFocus}>
      <BiSearch />
      <input
        type={type}
        value={value}
        onChange={changeValue}
        name={name}
        ref={input}
        {...rest}
      />
    </Container>
  );
};

export default SearchInput;
