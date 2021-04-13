import React, { useState } from 'react';
import * as S from './styles';

interface PrescriptionProps {
  repetition: string;
  serie: string;
  weight: string;
  interval: string;
  observation: string;
}

const ExerciseRow: React.FC = ({ children }) => {
  const [prescription, setPrescription] = useState<PrescriptionProps>(
    {} as PrescriptionProps,
  );

  function handleOnChange(name: string, event: string): void {
    const newValue = Object.assign(name, event);

    setPrescription(
      Object.assign(prescription, {
        name,
        event,
      }),
    );
  }

  return (
    <S.Container>
      {children}
      <S.InputsContainer>
        <input
          type="text"
          onChange={e => handleOnChange('repetion', e.target.value)}
        />
        <input
          type="text"
          onChange={e => handleOnChange('serie', e.target.value)}
        />
        <input
          type="text"
          onChange={e => handleOnChange('weight', e.target.value)}
        />
        <input
          type="text"
          onChange={e => handleOnChange('interval', e.target.value)}
        />
        <input
          type="text"
          onChange={e => handleOnChange('observation', e.target.value)}
        />
      </S.InputsContainer>
    </S.Container>
  );
};

export default ExerciseRow;
