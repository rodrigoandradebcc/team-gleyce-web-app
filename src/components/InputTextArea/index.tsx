import React, { TextareaHTMLAttributes, useState } from 'react';

import { Container } from './styles';

interface InputTextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

const InputTextArea: React.FC<InputTextArea> = ({ name, children }) => {
  const [value, setValue] = useState('');

  return (
    <Container
      name={name}
      value={value}
      onChange={e => setValue(e.target.value)}
    >
      {children}
    </Container>
  );
};

export default InputTextArea;
