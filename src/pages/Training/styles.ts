import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  background-color: var(--background-content);
  padding: 12px;

  overflow-y: auto;
  h2,
  strong {
    margin: 16px 16px;
  }
`;

export const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 16px;

  width: inherit;
`;

export const Message = styled.span``;

export const ScreenName = styled.h3`
  margin-top: 15px;
`;

export const ContainerCards = styled.div`
  margin: 16px 16px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(352px, auto));
  grid-gap: 64px 32px;
  grid-auto-rows: 100px;
`;

export const TrainingCard = styled.button`
  display: flex;
  flex-direction: column;
  /* min-width: 350px; */
  height: 8rem;
  background: white;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const InactiveTraininigs = styled.strong`
  padding-top: 32px;
`;
