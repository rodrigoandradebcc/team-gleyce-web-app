import React from 'react';
import { useForm } from 'react-hook-form';
import { NewInput } from '../NewInput';
import Modal from '../Modal';
import { Label } from './styles';

interface TrainingProps {
  name: string;
  observation: string;
  note: string;
  expiration_date: string;
  user_id: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  //   handleAddStudent: (student: TrainingProps) => Promise<void>;
}

interface FormDataProps {
  full_name: string;
}

const ModalAddTraining: React.FC<IModalProps> = ({
  isOpen = false,
  setIsOpen,
  //   handleAddStudent,
}) => {
  const { register, handleSubmit } = useForm();

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function handle({ full_name }: FormDataProps) {
    console.log(full_name);
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <form onSubmit={handleSubmit(handle)}>
        <Label>Nome do aluno</Label>
        <NewInput
          placeholder="Ex: Fulano de tal"
          required
          {...register('full_name')}
        />
        <button type="submit">TESTE</button>
      </form>
    </Modal>
  );
};

export default ModalAddTraining;
