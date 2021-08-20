import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdFitnessCenter } from 'react-icons/md';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../../services/api';
import ButtonRod from '../../ButtonRod';
import Modal from '../../Modal';
import { NewInput } from '../../NewInput';
import { NewSelect } from '../../NewSelect';
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
  const exerciseFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
  });
  const { register, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(exerciseFormSchema),
  });
  const { errors } = formState;

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
    [defaultValues.id, loadExercises, setIsOpen],
  );

  useEffect(() => {
    if (exercise) {
      setDefaultValues({ ...exercise });
    }
    reset(exercise);
  }, [reset, exercise]);

  const exercise_group = [
    { label: 'QUADRÍCEPS', value: 'QUADRÍCEPS' },
    { label: 'ADUTORES/ABDUTORES', value: 'ADUTORES/ABDUTORES' },
    { label: 'BÍCEPS/ANTEBRAÇO', value: 'BÍCEPS/ANTEBRAÇO' },
    { label: 'COSTAS', value: 'COSTAS' },
    { label: 'ISQUIOTIBIAIS/GLÚTEOS', value: 'ISQUIOTIBIAIS/GLÚTEOS' },
    { label: 'OMBRO/TRAPÉZIO', value: 'OMBRO/TRAPÉZIO' },
    { label: 'FLEXÃO PLANTAR ISO', value: 'FLEXÃO PLANTAR ISO' },
    { label: 'TRÍCEPS', value: 'TRÍCEPS' },
    { label: 'TREINAMENTO FUNCIONAL', value: 'TREINAMENTO FUNCIONAL' },
    { label: 'OMBRO/TRAPEZIO', value: 'OMBRO/TRAPEZIO' },
    { label: 'CARDIO', value: 'CARDIO' },
    { label: 'OBSERVACOES', value: 'OBSERVACOES' },
    { label: 'MUSCULAÇÃO', value: 'MUSCULAÇÃO' },
    { label: 'PEITORAL', value: 'PEITORAL' },
  ];

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
          <p>{defaultValues.id ? 'Editar' : 'Cadastrar'} Exercícios</p>
        </S.LogoAndTitleModal>
        <form onSubmit={handleSubmit(handleAddExercise)}>
          <S.LabelAndInputArea>
            <S.Label>Nome do Exercício</S.Label>
            <NewInput
              placeholder="Ex: Banco Tríceps''"
              {...register('name')}
              error={errors.name}
              defaultValue={defaultValues.name || ''}
            />
          </S.LabelAndInputArea>
          <S.LabelAndInputArea>
            <S.Label>Grupo de Exerício</S.Label>

            <NewSelect
              values={exercise_group}
              {...register('exercise_group')}
              defaultValue={defaultValues?.exercise_group}
            />
          </S.LabelAndInputArea>
          <S.LabelAndInputArea>
            <S.Label>Link do Video</S.Label>

            <NewInput
              type="text"
              placeholder="www.link.com"
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
