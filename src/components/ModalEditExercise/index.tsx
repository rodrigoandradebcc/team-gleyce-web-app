import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { v4 as uuid } from 'uuid';
import { FiCheckSquare } from 'react-icons/fi';

import Modal from '../Modal';
import LegacyInput from '../LegacyInput';

import { Form, Label } from './styles';

interface IExercise {
  exercise_group: string;
  link: string;
  name: string;
  id: string;
}

interface IModalProps {
  isOpen: boolean;
  editingExercise: IExercise;
  setIsOpen: () => void;
  handleUpdateExercise: (exercise: IExercise) => void;
}

const ModalAddExercise: React.FC<IModalProps> = ({
  isOpen = false,
  setIsOpen,
  editingExercise,
  handleUpdateExercise,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    ({ name, link, exercise_group }: IExercise) => {
      handleUpdateExercise({
        id: editingExercise.id,
        name,
        link,
        exercise_group,
      });

      setIsOpen();
    },
    [handleUpdateExercise, setIsOpen, editingExercise],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingExercise}>
        <h1>Editar exercício</h1>

        <div className="two-inputs">
          <div>
            <Label>Nome Exercício</Label>
            <LegacyInput name="name" placeholder="Ex: Banco Tríceps''" />
          </div>
          <div>
            <Label>Grupo do exercício</Label>
            <LegacyInput
              name="exercise_group"
              type="text"
              placeholder="Tríceps"
            />
          </div>
        </div>

        <div>
          <div>
            <Label>Link do vídeo</Label>
            <LegacyInput
              name="link"
              type="text"
              placeholder="https://youtube.com"
            />
          </div>
        </div>

        <button type="submit" data-testid="update-exercise-button">
          <p className="text">Atualizar exercício</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddExercise;
