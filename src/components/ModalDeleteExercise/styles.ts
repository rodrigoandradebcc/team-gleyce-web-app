import styled from 'styled-components';

export const Title = styled.h3``;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

type ButtonProps = {
  colorButton?: string;
};

export const Button = styled.button<ButtonProps>`
  margin-top: 20px;
  background-color: ${props => props.colorButton};
  padding: 10px 20px;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: filter 0.4s;

  & + button {
    margin-left: 10px;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;

export const Label = styled.p`
  color: #fff;
  font-weight: 600;
`;
