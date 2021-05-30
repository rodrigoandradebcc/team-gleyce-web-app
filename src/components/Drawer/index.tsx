import React, { ReactNode, useEffect, useState } from 'react';

import { ReactModalComponent } from './styles';

interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: () => void;
  typeDrawer?: 'large' | 'medium';
}

const Drawer: React.FC<DrawerProps> = ({
  children,
  isOpen,
  setIsOpen,
  typeDrawer,
}) => {
  const [drawerStatus, setDrawerStatus] = useState(isOpen);

  useEffect(() => {
    setDrawerStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModalComponent
      isOpen={drawerStatus}
      shouldCloseOnOverlayClick={!false}
      ariaHideApp={false}
      onRequestClose={setIsOpen}
      overlayClassName="react-drawer-overlay"
      className="react-drawer-content drawer-content"
      closeTimeoutMS={900}
      typeDrawer={typeDrawer}
    >
      {children}
    </ReactModalComponent>
  );
};

export default Drawer;
