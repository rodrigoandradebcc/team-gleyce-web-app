import React, { useEffect, useState } from 'react';

import ReactModal from 'react-modal';

interface IModalProps {
  children: any;
  isOpen: boolean;
  setIsOpen: () => void;
}

const Modal: React.FC<IModalProps> = ({
  children,
  isOpen,
  setIsOpen,
}: IModalProps) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={modalStatus}
      shouldCloseOnOverlayClick={!false}
      ariaHideApp={false}
      onRequestClose={setIsOpen}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F7F7F7',
          color: '#000000',
          borderRadius: '4px',
          width: '100%',
          height: 'auto',
          maxWidth: '736px',
          border: 'none',
          padding: '0',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
