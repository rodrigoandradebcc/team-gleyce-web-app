import { getDate, parseISO, format } from 'date-fns';
import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { MdFitnessCenter } from 'react-icons/md';
import { useLocation } from 'react-router';
import { toast } from 'react-toastify';
import api from '../../services/api';
import ButtonRod from '../ButtonRod';
import Drawer from '../Drawer';
import { InputTextArea } from '../InputTextArea';
import { NewInput } from '../NewInput';
import Separator from '../Separator';
import * as S from './styles';

interface TrainingProps {
  id: string;
  name: string;
  observation: string;
  note: string;
  expiration_date: string;
  user_id: string;
}

type Inputs = {
  name: string;
  observation: string;
  note: string;
  expiration_date: string;
};

interface DrawerEditTraining {
  isOpen: boolean;
  setIsOpen: () => void;
  handleEditExercise?: (exercise: any) => void;
  titleDrawer: string;
  updateTrainings?(): void;
  training: TrainingProps;
}

interface HistoryProps {
  idSelected: string;
}

const DrawerEditTraining: React.FC<DrawerEditTraining> = ({
  setIsOpen,
  isOpen,
  titleDrawer,
  updateTrainings,
  training,
}) => {
  const { register, handleSubmit, reset } = useForm<Inputs>({
    defaultValues: {
      name: training?.name,
      expiration_date: training?.expiration_date,
      observation: training?.observation,
      note: training?.note,
    },
  });

  let formattedDate;
  if (training?.expiration_date) {
    formattedDate = format(new Date(training.expiration_date), 'yyyy-MM-dd');
  }

  useEffect(() => {
    reset();
  }, [training]);

  const location = useLocation<HistoryProps>();
  const { idSelected } = location.state;

  function handleAddTrainingSubmit(data: TrainingProps): void {
    const newData = {
      ...data,
      id: training.id,
      user_id: idSelected,
      expiration_date: parseISO(data.expiration_date).toISOString(),
    };

    handleAddTraining(newData);

    setIsOpen();
  }

  const handleAddTraining = useCallback(
    async (trainingItem: TrainingProps): Promise<void> => {
      try {
        await api.put(`/trainings/${trainingItem?.id}`, trainingItem);
        if (updateTrainings) {
          updateTrainings();
        }

        toast.success('Treino atualizado com sucesso!');
      } catch (error) {
        toast.error(error.response.data.error);
      }
    },
    [],
  );

  return (
    <Drawer
      isOpen={isOpen}
      setIsOpen={() => {
        reset();
        setIsOpen();
      }}
      typeDrawer="medium"
    >
      <S.DrawerHeader>
        <MdFitnessCenter />
        {titleDrawer}
      </S.DrawerHeader>
      <Separator color="#f0f0f0" />
      <S.DrawerBody>
        <form onSubmit={handleSubmit(handleAddTrainingSubmit)}>
          <S.LabelAndInputArea>
            <S.Label>Nome do Treino</S.Label>
            <NewInput
              placeholder="Ex: Supino"
              required
              {...register('name')}
              defaultValue={training?.name}
            />
          </S.LabelAndInputArea>
          <S.LabelAndInputArea>
            <S.Label>Data de expiração</S.Label>

            <NewInput
              required
              type="date"
              {...register('expiration_date')}
              defaultValue={formattedDate}
            />
          </S.LabelAndInputArea>
          <S.LabelAndInputArea>
            <S.Label>Observações para o aluno</S.Label>
            <InputTextArea
              placeholder="Ex: Observações para o aluno"
              {...register('observation')}
              defaultValue={training?.observation}
            />
          </S.LabelAndInputArea>
          <S.LabelAndInputArea>
            <S.Label>Anotações</S.Label>

            <InputTextArea
              placeholder="Ex: Anotações"
              {...register('note')}
              defaultValue={training?.note}
            />
          </S.LabelAndInputArea>

          <ButtonRod fullWidth heightSize="large" type="submit">
            Cadastrar
          </ButtonRod>
        </form>
      </S.DrawerBody>
    </Drawer>
  );
};

export default DrawerEditTraining;
