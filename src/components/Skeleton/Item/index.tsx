import React, { ReactNode } from 'react';

import { Container } from './styles';

interface ItemProps {
  children: ReactNode;
}

const Item: React.FC<ItemProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Item;
