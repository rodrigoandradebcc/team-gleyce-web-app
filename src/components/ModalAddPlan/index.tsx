import React from 'react';
import { useForm } from 'react-hook-form';
import { IoReaderOutline } from 'react-icons/io5';
import { NewInput } from '../NewInput';
import Modal from '../Modal';

import * as S from './styles';
import ButtonRod from '../ButtonRod';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalAddPlan: React.FC<IModalProps> = ({ isOpen = false, setIsOpen }) => {
  const { register, handleSubmit } = useForm();

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <S.ContainerModal>
        <S.LogoAndTitleModal>
          <IoReaderOutline size={24} />
          <p>Cadastrar plano</p>
        </S.LogoAndTitleModal>

        <form action="">
          <S.LabelAndInputArea>
            <S.Label>Nome do plano</S.Label>
            <NewInput placeholder="Ex: A" required {...register('name')} />
          </S.LabelAndInputArea>
          <ButtonRod fullWidth heightSize="large" type="submit">
            Cadastrar
          </ButtonRod>
        </form>
      </S.ContainerModal>
    </Modal>
  );
};

export default ModalAddPlan;
