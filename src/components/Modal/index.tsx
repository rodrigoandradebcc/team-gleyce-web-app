import React, { ReactNode, useEffect, useState } from 'react';
import { ReactModalComponent } from './styles';

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
      className="react-modal-content"
      closeTimeoutMS={900}
      typeModal={typeModal}
    >
      {children}
    </ReactModalComponent>
  );
};

export default Modal;
