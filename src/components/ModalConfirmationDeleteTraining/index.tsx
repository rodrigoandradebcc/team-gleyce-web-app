import React, { useCallback } from 'react';
import { FiTrash } from 'react-icons/fi';
import { toast } from 'react-toastify';
import api from '../../services/api';
import * as S from './styles';

interface ModalConfirmationDeleteTrainingProps {
  isOpen: boolean;
  setIsOpen: () => void;
  idSelected: string;
  updateTrainings(): void;
}

const ModalConfirmationDeleteTraining: React.FC<ModalConfirmationDeleteTrainingProps> = ({
  isOpen,
  setIsOpen,
  idSelected,
  updateTrainings,
}) => {
  const handleDeleteTraining = useCallback(async (id: string) => {
    try {
      await api.delete(`/trainings/${id}`);

      toast.success('Treino excluído com sucesso!');

      updateTrainings();
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }, []);

  return (
    <S.ModalComponent
      isOpen={isOpen}
      setIsOpen={() => {
        setIsOpen();
      }}
      typeModal="small"
    >
      <S.Content>
        <FiTrash size={48} />
        <h1>Excluir Treino</h1>
        <p>
          <span>Quer mesmo excluir esse treino?</span>
          <span>Ele será apagado pra sempre.</span>
        </p>
        <S.ActionButtonsArea>
          <S.Button
            background="#E1E3E5"
            fontColor="#787880"
            onClick={setIsOpen}
          >
            Cancelar
          </S.Button>
          <S.Button
            background="#E2445C"
            onClick={() => {
              handleDeleteTraining(idSelected);
              setIsOpen();
            }}
          >
            Excluir
          </S.Button>
        </S.ActionButtonsArea>
      </S.Content>
    </S.ModalComponent>
  );
};

export default ModalConfirmationDeleteTraining;
