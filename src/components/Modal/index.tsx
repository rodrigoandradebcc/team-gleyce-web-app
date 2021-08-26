import React, { ReactNode, useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import * as S from './styles';

interface IModalProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: () => void;
  typeModal?: 'large' | 'medium' | 'small' | 'x-small';
}

const Modal: React.FC<IModalProps> = ({
  children,
  isOpen,
  setIsOpen,
  typeModal,
}: IModalProps) => {
  const [modalStatus, setModalStatus] = useState(isOpen);
  const [buttonCloseMouseOver, setButtonCloseMouseOver] = useState(false);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <S.ReactModalComponent
      isOpen={modalStatus}
      shouldCloseOnOverlayClick={!false}
      ariaHideApp={false}
      onRequestClose={setIsOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      closeTimeoutMS={900}
      typeModal={typeModal}
    >
      <S.ContainerModal>
        <S.IconButtonClose
          onClick={() => {
            setIsOpen();
          }}
          mouseButton={buttonCloseMouseOver}
          onMouseOut={() => {
            setButtonCloseMouseOver(true);
          }}
          onMouseOver={() => {
            setButtonCloseMouseOver(false);
          }}
        >
          <MdClose size={24} />
        </S.IconButtonClose>
        {children}
      </S.ContainerModal>
    </S.ReactModalComponent>
  );
};

export default Modal;
