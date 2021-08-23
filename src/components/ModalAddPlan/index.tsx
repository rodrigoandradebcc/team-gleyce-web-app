import React, { FormEvent, useCallback, useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FiEdit2, FiPlus } from 'react-icons/fi';
import { IoMdCheckmark, IoMdCloseCircleOutline } from 'react-icons/io';
import { IoReaderOutline } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services/api';
import ButtonIcon from '../ButtonIcon';
import Modal from '../Modal';
import ConfirmationDeletePlanModal from '../modals/ConfirmationDeletePlanModal';
import { NewInput } from '../NewInput';
import * as S from './styles';

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

interface EditForm {
  edit: boolean;
  planId: string;
}

const ModalAddPlan: React.FC<IModalProps> = ({
  isOpen = false,
  setIsOpen,
  plans,
  getPlans,
}) => {
  const [description, setDescription] = useState('');

  const [planSelected, setPlanSelected] = useState('');
  const [editPlan, setEditPlan] = useState<EditForm>({} as EditForm);

  const [confirmationModal, setConfirmationModal] = useState(false);

  const handleToggleConfirmationModal = useCallback(() => {
    setConfirmationModal(!confirmationModal);
  }, [confirmationModal]);
  const location = useLocation<HistoryProps>();

  const { idSelected } = location.state;

  async function handleDeletePlan(id: string): Promise<void> {
    try {
      await api.delete(`/plans/${id}`);
      getPlans();
    } catch (error) {
      toast.error('Ocorreu um erro ao deletar um Plano');
    }
  }

  async function handleAddPlan(event: FormEvent): Promise<void> {
    try {
      event.preventDefault();
      await api.post(`/plans`, {
        description,
        training_id: idSelected,
      });
      setDescription('');
      // eslint-disable-next-line no-unused-expressions
      getPlans();

      toast.success('Plano cadastrado com sucesso!');
    } catch (error) {
      toast.error('Ocorreu um erro ao atualizar um Plano');
    }
  }

  async function handleUpdatePlanModal(event: FormEvent): Promise<void> {
    try {
      event.preventDefault();
      await api.put(`/plans/${editPlan.planId}`, {
        description,
      });
      disableEditPlan();
      getPlans();
      toast.success('Plano editado com sucesso!');
    } catch (error) {
      toast.error('Ocorreu um erro ao atualizar um Plano');
    }
  }

  function disableEditPlan(): void {
    setEditPlan(oldState => ({
      ...oldState,
      planId: '',
      edit: false,
    }));
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        typeModal="x-small"
        setIsOpen={() => {
          setIsOpen();
        }}
      >
        <S.ContainerModal>
          <S.LogoAndTitleModal>
            <IoReaderOutline size={24} />
            <p>Séries</p>
          </S.LogoAndTitleModal>
          <S.FormDescription>
            <input
              placeholder="Descrição"
              onChange={event => setDescription(event.target.value)}
              value={description}
            />
            <S.IconButton onClick={handleAddPlan}>
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
                  // console.log(plan.description);
                  return (
                    <S.PlanContent key={plan.id}>
                      <S.PlanItem>
                        {editPlan.edit && editPlan.planId === plan.id ? (
                          <S.Form>
                            <NewInput
                              defaultValue={plan.description}
                              name="description"
                              onChange={event =>
                                setDescription(event.target.value)
                              }
                              placeholder="Ex: A"
                            />
                            <div>
                              <ButtonIcon onClick={handleUpdatePlanModal}>
                                <IoMdCheckmark />
                              </ButtonIcon>
                              <ButtonIcon
                                onClick={() => {
                                  setEditPlan(oldState => ({
                                    ...oldState,
                                    edit: !editPlan.edit,
                                  }));
                                }}
                              >
                                <IoMdCloseCircleOutline />
                              </ButtonIcon>
                            </div>
                          </S.Form>
                        ) : (
                          <p key={plan.description}>{plan.description}</p>
                        )}
                      </S.PlanItem>
                      <S.PlanItem>
                        {!(editPlan.edit && editPlan.planId === plan.id) && (
                          <>
                            <FiEdit2
                              onClick={() => {
                                setEditPlan(oldState => ({
                                  ...oldState,
                                  edit: !editPlan.edit,
                                  planId: plan.id,
                                }));
                              }}
                            />
                            <FaRegTrashAlt
                              onClick={() => {
                                handleToggleConfirmationModal();
                                setPlanSelected(plan.id);
                              }}
                            />
                          </>
                        )}
                      </S.PlanItem>
                    </S.PlanContent>
                  );
                })}
            </S.SectionPlans>
          </S.PlanContainer>
        </S.ContainerModal>
      </Modal>
      <ConfirmationDeletePlanModal
        handleDeletePlan={() => handleDeletePlan(planSelected)}
        isOpen={confirmationModal}
        setIsOpen={handleToggleConfirmationModal}
      />
    </>
  );
};

export default ModalAddPlan;
