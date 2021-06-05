import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { MdFitnessCenter } from 'react-icons/md';
import { useLocation } from 'react-router';
import { toast } from 'react-toastify';
import { parseISO } from 'date-fns';
import api from '../../services/api';
import ButtonRod from '../ButtonRod';
import { InputTextArea } from '../InputTextArea';
import Modal from '../Modal';
import { NewInput } from '../NewInput';
import * as S from './styles';

interface TrainingProps {
  name: string;
  observation: string;
  note: string;
  expiration_date: string;
  user_id: string;
}

interface HistoryProps {
  idSelected: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  updateTrainings(): void;
}

const ModalAddTraining: React.FC<IModalProps> = ({
  isOpen = false,
  setIsOpen,
  updateTrainings,
}) => {
  const { register, handleSubmit, reset } = useForm();

  const location = useLocation<HistoryProps>();

  const { idSelected } = location.state;

  function handleAddTrainingSubmit(data: TrainingProps): void {
    const newData = {
      ...data,
      user_id: idSelected,
      expiration_date: parseISO(data.expiration_date).toISOString(),
    };
    handleAddTraining(newData);
    reset();
    setIsOpen();
  }

  const handleAddTraining = useCallback(
    async (training: TrainingProps): Promise<void> => {
      try {
        await api.post('/trainings', training);
        updateTrainings();

        toast.success('Treino cadastrado com sucesso!');
      } catch (error) {
        reset();
        toast.error(error.response.data.error);
      }
    },
    [],
  );

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={() => {
        reset();
        setIsOpen();
      }}
    >
      <S.ContainerModal>
        <S.LogoAndTitleModal>
          <MdFitnessCenter size={24} />
          <p>Cadastrar treino</p>
        </S.LogoAndTitleModal>
        <form onSubmit={handleSubmit(handleAddTrainingSubmit)}>
          <S.LabelAndInputArea>
            <S.Label>Nome do treino</S.Label>
            <NewInput placeholder="Ex: Supino" required {...register('name')} />
          </S.LabelAndInputArea>
          <S.LabelAndInputArea>
            <S.Label>Data de expiração</S.Label>
            <NewInput required type="date" {...register('expiration_date')} />
          </S.LabelAndInputArea>
          <S.LabelAndInputArea>
            <S.Label>Observações para o aluno</S.Label>
            <InputTextArea
              placeholder="Ex: Observações para o aluno"
              {...register('observation')}
            />
          </S.LabelAndInputArea>
          <S.LabelAndInputArea>
            <S.Label>Anotações</S.Label>
            <InputTextArea placeholder="Ex: Anotações" {...register('note')} />
          </S.LabelAndInputArea>

          <ButtonRod fullWidth heightSize="large" type="submit">
            Cadastrar
          </ButtonRod>
        </form>
      </S.ContainerModal>
    </Modal>
  );
};

export default ModalAddTraining;
