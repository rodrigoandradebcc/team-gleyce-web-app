import React from 'react';
import api from '../../../../services/api';

interface Prescription {
  repetition: string;
  serie: string;
  weight: string;
  interval: string;
  observation: string;
}
interface ExerciseRowProps {
  exercise: {
    id: string;
    name: string;
  };
  plan_id: string;
  prescriptionValue?: Prescription;
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
  prescriptionValue,
}) => {
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
          defaultValue={prescriptionValue?.repetition}
        />
      </td>

      <td>
        <input
          type="text"
          onBlur={e => handleOnChange('serie', e.target.value)}
          defaultValue={prescriptionValue?.serie}
        />
      </td>

      <td>
        <input
          type="text"
          onBlur={e => handleOnChange('weight', e.target.value)}
          defaultValue={prescriptionValue?.weight}
        />
      </td>

      <td>
        <input
          type="text"
          onBlur={e => handleOnChange('interval', e.target.value)}
          defaultValue={prescriptionValue?.interval}
        />
      </td>

      <td>
        <input
          type="text"
          onBlur={e => handleOnChange('observation', e.target.value)}
          defaultValue={prescriptionValue?.observation}
        />
      </td>
      <td>Excluir</td>
    </tr>
  );
};

export default ExerciseRow;
