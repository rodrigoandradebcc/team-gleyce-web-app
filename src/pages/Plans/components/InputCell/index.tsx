import React, { InputHTMLAttributes, useCallback, useState } from 'react';
import * as S from './styles';

type PrescriptionTypes =
  | 'repetition'
  | 'serie'
  | 'weight'
  | 'interval'
  | 'observation';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onBlur'> {
  name: PrescriptionTypes;
  onBlur: (name: PrescriptionTypes, event: string) => Promise<void>;
}

function InputCell({ name, onBlur, ...rest }: InputProps): JSX.Element {
  const [isCellFocused, setIsCellFocused] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsCellFocused(false);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsCellFocused(true);
  }, []);

  return (
    <>
      <S.Container isFocused={isCellFocused}>
        <input
          type="text"
          id={name}
          name={name}
          {...rest}
          onBlur={e => {
            onBlur(name, e.target.value);
            handleInputBlur();
          }}
          onFocus={handleInputFocus}
        />
      </S.Container>
    </>
  );
}

export default InputCell;
