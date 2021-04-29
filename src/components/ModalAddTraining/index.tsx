import React from 'react';
import { useForm } from 'react-hook-form';
import { MdFitnessCenter } from 'react-icons/md';
import { NewInput } from '../NewInput';
import { InputTextArea } from '../InputTextArea';

import Modal from '../Modal';
import * as S from './styles';
import ButtonRod from '../ButtonRod';

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

const ModalAddTraining: React.FC<IModalProps> = ({
  isOpen = false,
  setIsOpen,
  //   handleAddStudent,
}) => {
  const { register, handleSubmit } = useForm();

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function handle(data: TrainingProps) {
    console.log(data);
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <S.ContainerModal>
        <S.LogoAndTitleModal>
          <MdFitnessCenter size={24} />
          <p>Cadastrar treino</p>
        </S.LogoAndTitleModal>
        <form onSubmit={handleSubmit(handle)}>
          <S.LabelAndInputArea>
            <S.Label>Nome do treino</S.Label>
            <NewInput placeholder="Ex: Supino" required {...register('name')} />
          </S.LabelAndInputArea>
          <S.LabelAndInputArea>
            <S.Label>Data de expiração</S.Label>
            <NewInput required type="date" {...register('expiration_date')} />
          </S.LabelAndInputArea>
          <S.LabelAndInputArea>
            <S.Label>Observações para o aluno</S.Label>
            <InputTextArea
              placeholder="Ex: Observações para o aluno"
              {...register('observation')}
            />
          </S.LabelAndInputArea>
          <S.LabelAndInputArea>
            <S.Label>Anotações</S.Label>
            <InputTextArea placeholder="Ex: Anotações" {...register('note')} />
          </S.LabelAndInputArea>

          <ButtonRod fullWidth heightSize="large" type="submit">
            Cadastrar
          </ButtonRod>
        </form>
      </S.ContainerModal>
    </Modal>
  );
};

export default ModalAddTraining;
