import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { v4 as uuid } from 'uuid';
import { FiCheckSquare } from 'react-icons/fi';

import Modal from '../Modal';

interface IExercise {
  exercise_group: string;
  id: string;
  link: string;
  name: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleDeleteExercise: (exercise: IExercise) => void;
}

const ModalDeleteExercise: React.FC<IModalProps> = ({
  isOpen = false,
  setIsOpen,
  handleDeleteExercise,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async ({ name, link, exercise_group }: IExercise) => {
      handleDeleteExercise({
        id: uuid(),
        name,
        link,
        exercise_group,
      });

      setIsOpen();
    },
    [handleDeleteExercise, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h3>Deseja realmente apagar este exercício?</h3>
      <div className="two-inputs">
        <button type="submit" data-testid="confirm-delete-exercise-button">
          <p className="text">Confirmar</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
        <button type="submit" data-testid="cancel-delete-exercise-button">
          <p className="text">Cancelar</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </div>
    </Modal>
  );
};

export default ModalDeleteExercise;
