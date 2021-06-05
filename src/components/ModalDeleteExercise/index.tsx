import React from 'react';

import Modal from '../Modal';

import { Title, ActionsContainer, Button, Label } from './styles';

interface IModalProps {
  isOpen: boolean;
  deletingExercise: string;
  setIsOpen: () => void;
  handleDeleteExercise: (id: string) => void;
}

const ModalDeleteExercise: React.FC<IModalProps> = ({
  isOpen = false,
  deletingExercise,
  setIsOpen,
  handleDeleteExercise,
}) => {
  function handleConfirmDelete(id: string): void {
    handleDeleteExercise(id);
    setIsOpen();
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Title>Deseja realmente apagar este exercício?</Title>
      <ActionsContainer>
        <Button
          colorButton="#D61E29"
          type="submit"
          data-testid="confirm-delete-exercise-button"
          onClick={() => handleConfirmDelete(deletingExercise)}
        >
          <Label>Confirmar</Label>
        </Button>
        <Button
          colorButton="#00C06B"
          type="submit"
          data-testid="cancel-delete-exercise-button"
          onClick={() => setIsOpen()}
        >
          <Label>Cancelar</Label>
        </Button>
      </ActionsContainer>
    </Modal>
  );
};

export default ModalDeleteExercise;
