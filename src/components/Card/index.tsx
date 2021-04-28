import React from 'react';
import { FiCalendar } from 'react-icons/fi';

import { Container, InfoContainer, Title, Quantity, Go } from './styles';

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
      <InfoContainer>
        <Title>{cardName}</Title>
        <Quantity>{quantity}</Quantity>
      </InfoContainer>
      <Go to="/" colortype={numberColor}>
        <FiCalendar />
      </Go>
    </Container>
  );
};

export default Card;
