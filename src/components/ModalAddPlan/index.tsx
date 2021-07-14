import { yupResolver } from '@hookform/resolvers/yup';
import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoReaderOutline } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { FiPlus, FiEdit2 } from 'react-icons/fi';
import { FaRegTrashAlt } from 'react-icons/fa';
import api from '../../services/api';
import ButtonRod from '../ButtonRod';
import Modal from '../Modal';
import { NewInput } from '../NewInput';
import * as S from './styles';
import ConfirmationDeletePlanModal from '../modals/ConfirmationDeletePlanModal';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  plans?: Plan[];
  getPlans: () => Promise<void>;
}

export interface Plan {
  id: string;
  description: string;
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

const ModalAddPlan: React.FC<IModalProps> = ({
  isOpen = false,
  setIsOpen,
  plans,
  getPlans,
}) => {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(planFormSchema),
  });

  const [confirmationModal, setConfirmationModal] = useState(false);

  const handleToggleConfirmationModal = useCallback(() => {
    setConfirmationModal(!confirmationModal);
  }, [confirmationModal]);

  const { errors } = formState;

  const location = useLocation<HistoryProps>();

  const { idSelected } = location.state;

  function handleAddPlan(data: PlanProps): void {
    const newData = { ...data, training_id: idSelected };

    console.log(newData.description);
    handlePlanSubmit(newData);
    reset();

    // setIsOpen();
  }

  async function handleDeletePlan(id: string): Promise<void> {
    try {
      await api.delete(`/plans/${id}`);
      getPlans();
    } catch (error) {
      toast.error('Ocorreu um erro ao deletar um Plano');
    }
  }

  const handlePlanSubmit = useCallback(async (plan: PlanProps) => {
    try {
      await api.post('/plans', plan);
      getPlans();

      toast.success('Plano cadastrado com sucesso!');
    } catch (error) {
      toast.error(
        'Ocorreu um erro ao cadastrar um Plano, tente novamente mais tarde!',
      );
    }
  }, []);

  return (
    <>
      <Modal
        isOpen={isOpen}
        typeModal="x-small"
        setIsOpen={() => {
          reset();
          setIsOpen();
        }}
      >
        <S.ContainerModal>
          <S.LogoAndTitleModal>
            <IoReaderOutline size={24} />
            <p>Séries</p>
          </S.LogoAndTitleModal>
          <S.FormDescription onSubmit={handleSubmit(handleAddPlan)}>
            <NewInput placeholder="Descrição" {...register('description')} />
            <S.IconButton type="submit">
              <FiPlus size={24} />
            </S.IconButton>
          </S.FormDescription>

          <S.PlanContainer>
            <S.LabelContent>
              <S.LabelItem>
                <p>Descrição</p>
              </S.LabelItem>
              <S.LabelItem>
                <p>Ações</p>
              </S.LabelItem>
            </S.LabelContent>

            <S.SectionPlans>
              {plans &&
                plans.map(plan => {
                  return (
                    <S.PlanContent>
                      <S.PlanItem>
                        <p>{plan.description}</p>
                      </S.PlanItem>
                      <S.PlanItem>
                        <FiEdit2 />
                        <FaRegTrashAlt
                          onClick={() => {
                            handleToggleConfirmationModal();
                            // handleDeletePlan(plan.id)
                          }}
                        />
                      </S.PlanItem>
                    </S.PlanContent>
                  );
                })}
            </S.SectionPlans>
          </S.PlanContainer>
        </S.ContainerModal>
      </Modal>
      <ConfirmationDeletePlanModal
        isOpen={confirmationModal}
        setIsOpen={handleToggleConfirmationModal}
      />
    </>
  );
};

export default ModalAddPlan;
