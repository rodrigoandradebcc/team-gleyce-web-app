import React from 'react';
import { FiCalendar } from 'react-icons/fi';

import { Container, IconContainer, InfoContainer, Counter } from './styles';

interface DueDateCardProps {
  counter: number;
  color: string;
}

const DueDateCard: React.FC<DueDateCardProps> = ({ color, counter }) => {
  return (
    <Container color={color}>
      <IconContainer color={color}>
        <FiCalendar size={16} />
      </IconContainer>

      <InfoContainer color={color}>
        <Counter color={color}>{counter}</Counter>
        Vencimentos de Hoje
      </InfoContainer>
    </Container>
  );
};

export default DueDateCard;
