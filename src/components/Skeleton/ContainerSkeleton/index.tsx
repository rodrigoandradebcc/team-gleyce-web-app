import React, { ReactNode } from 'react';

import { Container } from './styles';

interface ContainerSkeletonProps {
  children: ReactNode;
  style?: React.CSSProperties;
  paddingContainer?: boolean;
}

const ContainerSkeleton: React.FC<ContainerSkeletonProps> = ({
  children,
  style,
  paddingContainer,
}) => {
  return (
    <Container style={style} paddingContainer={paddingContainer}>
      {children}
    </Container>
  );
};

export default ContainerSkeleton;
