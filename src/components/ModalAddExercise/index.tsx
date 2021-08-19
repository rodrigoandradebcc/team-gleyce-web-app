import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdFitnessCenter } from 'react-icons/md';
import { toast } from 'react-toastify';
import api from '../../services/api';
import ButtonRod from '../ButtonRod';
import Modal from '../Modal';
import { NewInput } from '../NewInput';
import * as S from './styles';

interface ExerciseProps {
  exercise_group: string;
  id: string;
  link: string;
  name: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  exercise?: ExerciseProps;
  clearData(): void;
  loadExercises(): Promise<void>;
}

const ModalExercise: React.FC<IModalProps> = ({
  isOpen = false,
  setIsOpen,
  exercise,
  clearData,
  loadExercises,
}) => {
  const { register, handleSubmit, reset } = useForm();
  const [defaultValues, setDefaultValues] = useState<ExerciseProps>(
    {} as ExerciseProps,
  );

  const handleAddExercise = useCallback(
    async (exerciseData: ExerciseProps): Promise<void> => {
      try {
        if (defaultValues.id) {
          await api.put(`/exercises/${defaultValues.id}`, exerciseData);
        } else {
          await api.post('/exercises', exerciseData);
        }
        loadExercises();

        toast.success(
          `Exercício ${
            defaultValues.id ? 'atualizado' : 'cadastrado'
          } com sucesso!`,
        );
        setIsOpen();
      } catch (error) {
        toast.error(error.response.data.error);
      }
    },
    [defaultValues.id, setIsOpen],
  );

  useEffect(() => {
    if (exercise) {
      setDefaultValues({ ...exercise });
    }
    reset(exercise);
  }, [reset, exercise]);

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={() => {
        reset();
        clearData();
        setIsOpen();
      }}
    >
      <S.ContainerModal>
        <S.LogoAndTitleModal>
          <MdFitnessCenter size={24} />
          <p>Cadastrar Exercícios</p>
        </S.LogoAndTitleModal>
        <form onSubmit={handleSubmit(handleAddExercise)}>
          <S.LabelAndInputArea>
            <S.Label>Nome do Exercício</S.Label>
            <NewInput
              placeholder="Ex: Banco Tríceps''"
              {...register('name')}
              defaultValue={defaultValues.name || ''}
            />
          </S.LabelAndInputArea>
          <S.LabelAndInputArea>
            <S.Label>Grupo de Exerício</S.Label>
            <NewInput
              type="text"
              placeholder="Tríceps"
              {...register('exercise_group')}
              defaultValue={defaultValues.exercise_group || ''}
            />
          </S.LabelAndInputArea>
          <S.LabelAndInputArea>
            <S.Label>Link do Video</S.Label>

            <NewInput
              type="text"
              placeholder="Tríceps"
              {...register('link')}
              defaultValue={defaultValues.link || ''}
            />
          </S.LabelAndInputArea>
          <ButtonRod fullWidth heightSize="large" type="submit">
            {defaultValues.id ? 'Editar' : 'Adicionar'} exercício
          </ButtonRod>
        </form>
      </S.ContainerModal>
    </Modal>
  );
};

export default ModalExercise;
