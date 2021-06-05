import { yupResolver } from '@hookform/resolvers/yup';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { IoReaderOutline } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import api from '../../services/api';
import ButtonRod from '../ButtonRod';
import Modal from '../Modal';
import { NewInput } from '../NewInput';
import * as S from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

interface HistoryProps {
  idSelected: string;
}

interface PlanProps {
  description: string;
  training_id: string;
}

const planFormSchema = yup.object().shape({
  description: yup.string().required('Descrição obrigatória'),
});

const ModalAddPlan: React.FC<IModalProps> = ({ isOpen = false, setIsOpen }) => {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(planFormSchema),
  });
  const { errors } = formState;

  const location = useLocation<HistoryProps>();

  const { idSelected } = location.state;

  function handleAddPlan(data: PlanProps): void {
    const newData = { ...data, training_id: idSelected };
    handlePlanSubmit(newData);
    reset();

    setIsOpen();
  }

  const handlePlanSubmit = useCallback(async (plan: PlanProps) => {
    try {
      await api.post('/plans', plan);

      toast.success('Plano cadastrado com sucesso!');
    } catch (error) {
      toast.error(
        'Ocorreu um erro ao cadastrar um Plano, tente novamente mais tarde!',
      );
    }
  }, []);

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
          <IoReaderOutline size={24} />
          <p>Cadastrar plano</p>
        </S.LogoAndTitleModal>

        <form onSubmit={handleSubmit(handleAddPlan)}>
          <S.LabelAndInputArea>
            <S.Label>Nome do plano</S.Label>
            <NewInput
              placeholder="Ex: A"
              {...register('description')}
              error={errors.description}
            />
          </S.LabelAndInputArea>
          <ButtonRod fullWidth heightSize="large" type="submit">
            Cadastrar
          </ButtonRod>
        </form>
      </S.ContainerModal>
    </Modal>
  );
};

export default ModalAddPlan;
