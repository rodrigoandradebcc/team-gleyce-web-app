import styled from 'styled-components';
import { shade } from 'polished';

interface CardProps {
  color: string;
}

export const Container = styled.div<CardProps>`
  color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
`;

export const IconContainer = styled.div<CardProps>`
  padding: 15px;
  background-color: #fff;
  border-radius: 50%;

  position: relative;

  svg {
    color: ${props => props.color};

    position: absolute;
    left: 50%;
    top: 50%;
  }
`;

export const InfoContainer = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
`;

export const Counter = styled.div<CardProps>`
  margin-bottom: 10px;
`;
