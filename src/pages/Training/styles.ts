import styled from 'styled-components';

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

export const Message = styled.span``;

export const ScreenName = styled.h3`
  margin-top: 15px;
`;

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(352px, auto));
  grid-gap: 8px 32px;
`;

export const NameAndExpirationDate = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  strong {
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 4px;
  }

  > div {
    display: flex;

    align-items: center;

    svg {
      color: #4caf50;
      margin-right: 0.5rem;
      width: 16px;
    }
  }

  > div p {
    font-size: 16px;
    color: #4caf50;
    font-weight: 500;
  }
`;

export const TrainingCard = styled.div`
  display: flex;
  width: 100%;

  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);

  height: 5rem;
  background: white;
  border: none;
  border-radius: 2px;
  align-items: center;

  padding: 0 72px;
  justify-content: space-between;
  text-align: center;
`;

export const ButtonActionsContainer = styled.div`
  display: flex;
  justify-content: center;

  > button:first-child {
    margin-right: 32px;
  }
`;

export const InactiveTraininigs = styled.strong`
  /* padding-top: 32px; */
`;

export const NameAndLogoContainer = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  min-height: 2rem;

  /* background: red; */

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
