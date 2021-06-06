import styled from 'styled-components';
import ButtonIcon from '../../components/ButtonIcon';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  background-color: var(--background-content);
  padding: 0.8125rem 2.69rem;

  overflow-y: auto;

  > h2,
  > strong {
    margin: 1rem 0;
  }
`;
export const BtnEditTraining = styled(ButtonIcon)`
  svg {
    margin-right: 1rem;
  }
`;

export const Message = styled.span``;

export const ScreenName = styled.h3`
  margin-top: 1rem;
`;

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(352px, auto));
  grid-gap: 0.5rem 2rem;
`;

export const NameAndExpirationDate = styled.div<TrainingCardProps>`
  display: flex;
  flex-direction: column;
  text-align: left;

  strong {
    font-size: 1.125rem;
    font-weight: 500;
    padding-bottom: 0.25rem;
    text-transform: uppercase;

    color: ${props => props.currentDate && '#BBBBBB'};
  }

  > div {
    display: flex;

    align-items: center;

    svg {
      color: ${props => (props.currentDate ? '#BBBBBB' : '#4caf50')};
      margin-right: 0.5rem;
      width: 1rem;
    }
  }

  > div p {
    font-size: 1rem;
    color: ${props => (props.currentDate ? '#BBBBBB' : '#4caf50')};
    font-weight: 500;
  }
`;

interface TrainingCardProps {
  currentDate: boolean;
}

export const TrainingCard = styled.div`
  display: flex;
  width: 100%;

  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);

  height: 5rem;
  background: white;
  border: none;
  border-radius: 2px;
  align-items: center;

  padding: 0 4.5rem;
  justify-content: space-between;
  text-align: center;
`;

export const ButtonActionsContainer = styled.div`
  display: flex;
  justify-content: center;

  > button:first-child {
    margin-right: 2rem;
  }
`;

export const NameAndLogoContainer = styled.div`
  margin-top: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  min-height: 2rem;

  > p {
    margin-right: 0.5rem;
    font-weight: 500;
  }
`;
export const ButtonArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;
