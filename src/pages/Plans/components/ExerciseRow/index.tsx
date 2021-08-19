import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify';
import api from '../../../../services/api';
import InputCell from '../InputCell';
import * as S from './styles';

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
  loadPlanCompleted: () => void;
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
  loadPlanCompleted,
}) => {
  async function handleOnChange(
    name: PrescriptionTypes,
    value: string,
  ): Promise<void> {
    const prescription = {} as Prescription;
    prescription[name] = value;

    const payload = {
      plan_id,
      exercise_id: exercise.id,
      prescription,
    };

    await api.post('/plans/insert-exercise', payload);
  }

  async function deleteExerciseAndPrescription(id: string): Promise<void> {
    try {
      await api.delete(`/plans/delete-exercise/${id}/${plan_id}`);
      toast.success('Exercício excluído com sucesso!');
      loadPlanCompleted();
    } catch (error) {
      toast.error('Ocorreu um erro ao deletar um exercício');
    }
  }

  return (
    <tr>
      <S.Cell>{children}</S.Cell>
      <S.Cell>
        <InputCell
          name="repetition"
          type="text"
          onBlur={handleOnChange}
          defaultValue={prescriptionValue?.repetition}
        />
      </S.Cell>

      <S.Cell>
        <InputCell
          name="serie"
          type="text"
          onBlur={handleOnChange}
          defaultValue={prescriptionValue?.serie}
        />
      </S.Cell>

      <S.Cell>
        <InputCell
          name="weight"
          type="text"
          onBlur={handleOnChange}
          defaultValue={prescriptionValue?.weight}
        />
      </S.Cell>

      <S.Cell>
        <InputCell
          type="text"
          name="interval"
          onBlur={handleOnChange}
          defaultValue={prescriptionValue?.interval}
        />
      </S.Cell>

      <S.Cell>
        <InputCell
          type="text"
          name="observation"
          onBlur={handleOnChange}
          defaultValue={prescriptionValue?.observation}
        />
      </S.Cell>
      <S.Cell>
        <FiTrash2
          size={24}
          onClick={() => {
            console.log('aaaaaaaaaaaaaa', exercise.id);
            deleteExerciseAndPrescription(exercise.id);
          }}
        />
      </S.Cell>
    </tr>
  );
};

export default ExerciseRow;
