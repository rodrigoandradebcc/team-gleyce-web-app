import React, { ReactNode } from 'react';

import { Container } from './styles';

interface SpaceBetween {
  children: ReactNode;
}

const SpaceBetween: React.FC<SpaceBetween> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default SpaceBetween;
