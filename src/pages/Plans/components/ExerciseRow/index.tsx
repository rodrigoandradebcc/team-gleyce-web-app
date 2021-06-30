import React, { useState } from 'react';
import api from '../../../../services/api';

interface ExerciseRowProps {
  exercise: {
    id: string;
    name: string;
  };
  plan_id: string;
}

interface Prescription {
  repetition: string;
  serie: string;
  weight: string;
  interval: string;
  observation: string;
}

type PrescriptionTypes =
  | 'repetition'
  | 'serie'
  | 'weight'
  | 'interval'
  | 'observation';

const ExerciseRow: React.FC<ExerciseRowProps> = ({
  children,
  exercise,
  plan_id,
}) => {
  // const [prescription, setPrescription] = useState<PrescriptionProps>(
  //   {} as PrescriptionProps,
  // );
  const [nameExerciseRow, setNameExerciseRow] = useState(exercise.name);

  async function handleOnChange(
    name: PrescriptionTypes,
    event: string,
  ): Promise<void> {
    // const newValue = Object.assign(name, event);

    const prescription = {} as Prescription;
    prescription[name] = event;

    const payload = {
      plan_id,
      exercise_id: exercise.id,
      prescription,
    };

    await api.post('/plans/insert-exercise', payload);
  }

  return (
    <tr>
      <td>{children}</td>
      <td>
        <input
          type="text"
          onBlur={e => handleOnChange('repetition', e.target.value)}
        />
      </td>

      <td>
        <input
          type="text"
          onBlur={e => handleOnChange('serie', e.target.value)}
        />
      </td>

      <td>
        <input
          type="text"
          onBlur={e => handleOnChange('weight', e.target.value)}
        />
      </td>

      <td>
        <input
          type="text"
          onBlur={e => handleOnChange('interval', e.target.value)}
        />
      </td>

      <td>
        <input
          type="text"
          onBlur={e => handleOnChange('observation', e.target.value)}
        />
      </td>
      <td>Excluir</td>
    </tr>
  );
};

export default ExerciseRow;
