import React, { useCallback } from 'react';
import { MdFitnessCenter } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import ButtonRod from '../ButtonRod';
import { NewInput } from '../NewInput';
import Modal from '../Modal';
import * as S from './styles';
import api from '../../services/api';

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
}

const ModalExercise: React.FC<IModalProps> = ({
  isOpen = false,
  setIsOpen,
  exercise,
}) => {
  const { register, handleSubmit, reset } = useForm();

  const handleAddExercise = useCallback(
    async (exerciseData: ExerciseProps): Promise<void> => {
      try {
        await api.post('/exercises', exerciseData);

        toast.success('Exercício cadastrado com sucesso!');
      } catch (error) {
        reset();
        toast.error(error.response.data.error);
      }
    },
    [],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <S.ContainerModal>
        <S.LogoAndTitleModal>
          <MdFitnessCenter size={24} />
          <p>Cadastrar Exercicios</p>
        </S.LogoAndTitleModal>
        <form onSubmit={handleSubmit(handleAddExercise)}>
          <S.LabelAndInputArea>
            <S.Label>Nome do Exercício</S.Label>
            <NewInput placeholder="Ex: Banco Tríceps''" {...register('name')} />
          </S.LabelAndInputArea>
          <S.LabelAndInputArea>
            <S.Label>Grupo de Exericio</S.Label>
            <NewInput
              type="text"
              placeholder="Tríceps"
              {...register('exercise_group')}
            />
          </S.LabelAndInputArea>
          <S.LabelAndInputArea>
            <S.Label>Link do Video</S.Label>
            <NewInput type="text" placeholder="Tríceps" {...register('link')} />
          </S.LabelAndInputArea>
          <ButtonRod fullWidth heightSize="large" type="submit">
            Adicionar exercício
          </ButtonRod>
        </form>
      </S.ContainerModal>
    </Modal>
  );
};

export default ModalExercise;
