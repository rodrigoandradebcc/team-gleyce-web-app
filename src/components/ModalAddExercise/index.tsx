import React, { useCallback } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { v4 as uuid } from 'uuid';
import { NewInput } from '../NewInput';
import Modal from '../Modal';
import { Form, Label } from './styles';

interface IExercise {
  exercise_group: string;
  id: string;
  link: string;
  name: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddExercise: (exercise: IExercise) => void;
}

const ModalAddExercise: React.FC<IModalProps> = ({
  isOpen = false,
  setIsOpen,
  handleAddExercise,
}) => {
  const handleSubmit = useCallback(
    async ({ name, link, exercise_group }: IExercise) => {
      handleAddExercise({
        id: uuid(),
        name,
        link,
        exercise_group,
      });

      setIsOpen();
    },
    [handleAddExercise, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit}>
        <h1>Novo exercício</h1>

        <div className="two-inputs">
          <div>
            <Label>Nome Exercício</Label>
            <NewInput name="name" placeholder="Ex: Banco Tríceps''" />
          </div>
          <div>
            <Label>Grupo do exercício</Label>
            <NewInput name="exercise_group" type="text" placeholder="Tríceps" />
          </div>
        </div>

        <div>
          <div>
            <Label>Link do vídeo</Label>
            <NewInput
              name="link"
              type="text"
              placeholder="https://youtube.com"
            />
          </div>
        </div>

        <button type="submit" data-testid="add-exercise-button">
          <p className="text">Adicionar exercício</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddExercise;
