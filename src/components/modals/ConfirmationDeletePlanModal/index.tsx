import React from 'react';
import { FiTrash } from 'react-icons/fi';
import * as S from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleDeletePlan: () => Promise<void>;
}

function ConfirmationDeletePlanModal({
  isOpen = false,
  setIsOpen,
  handleDeletePlan,
}: IModalProps): JSX.Element {
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
        <h1>Excluir Plano</h1>
        <p>
          <span>Quer mesmo excluir esse plano?</span>
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
              setIsOpen();
              handleDeletePlan();
            }}
          >
            Excluir
          </S.Button>
        </S.ActionButtonsArea>
      </S.Content>
    </S.ModalComponent>
  );
}

export default ConfirmationDeletePlanModal;
