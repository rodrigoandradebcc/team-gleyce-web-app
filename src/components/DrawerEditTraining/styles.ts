import styled from 'styled-components';
import ButtonRod from '../ButtonRod';

export const Button = styled(ButtonRod)`
  margin-top: 1rem;
`;

export const DrawerHeader = styled.header`
  padding: 16px 24px;
  font-weight: 500;

  display: flex;
  align-items: center;
  font-size: 24px;

  svg {
    margin-right: 8px;
  }
`;

export const DrawerBody = styled.section`
  padding: 24px;
`;

export const Label = styled.p`
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

export const LabelAndInputArea = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 1rem;
  }

  &:last-child {
    margin-bottom: 8px;
  }
`;

export const DrawerActionsArea = styled.section``;
