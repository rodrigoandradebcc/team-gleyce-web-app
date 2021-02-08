import React from 'react';

import { Container, Title } from './styles';

export interface Props {
  numberColor?: string;
  cardName?: string;
  quantity?: number;
}

const Card: React.FC<Props> = ({
  numberColor = '',
  cardName = '',
  quantity = 0,
}) => {
  return (
    <Container>
      <Title numberColor={numberColor}>{quantity}</Title>
      <p>{cardName}</p>
      <a href="/">VISUALIZAR</a>
    </Container>
  );
};

export default Card;
