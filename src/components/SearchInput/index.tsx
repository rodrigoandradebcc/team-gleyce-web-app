import React, { InputHTMLAttributes, useRef } from 'react';
import { BiSearch } from 'react-icons/bi';
import { Container } from './styles';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  name,
  type,
  value,
  onChange,
  ...rest
}) => {
  const input = useRef<HTMLInputElement>(null);

  function toggleFocus(): void {
    input.current?.focus();
  }

  return (
    <Container onClick={toggleFocus}>
      <BiSearch />
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        ref={input}
        {...rest}
      />
    </Container>
  );
};

export default SearchInput;
