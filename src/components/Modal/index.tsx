import React, { useEffect, useState } from 'react';
import { ReactModalComponent } from './styles';

interface IModalProps {
  children: any;
  isOpen: boolean;
  setIsOpen: () => void;
  typeModal?: 'large' | 'medium' | 'small';
  teste?: 'string';
}

const Modal: React.FC<IModalProps> = ({
  children,
  isOpen,
  setIsOpen,
  typeModal,
  teste,
}: IModalProps) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModalComponent
      isOpen={modalStatus}
      shouldCloseOnOverlayClick={!false}
      ariaHideApp={false}
      onRequestClose={setIsOpen}
      overlayClassName="react-modal-overlay"
      className={teste || 'react-modal-content'}
      closeTimeoutMS={900}
      typeModal={typeModal}
    >
      {children}
    </ReactModalComponent>
  );
};

export default Modal;
