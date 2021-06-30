import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  background-color: var(--background-content);
  padding: 0.8125rem 2.69rem;

  overflow-y: auto;

  h1 {
    font-weight: 500;
    font-size: 1.5rem;
  }
`;

export const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem;

  width: inherit;
`;

export const Message = styled.span``;

export const ScreenName = styled.h3`
  margin-top: 15px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 1rem;
  margin-bottom: 0.625rem;
`;

export const Result = styled.div`
  font-weight: 400;
  font-size: 1rem;
  text-transform: capitalize;
`;

export const ContainerCardsStudents = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  gap: 32px 16px;
`;

export const ListStudentEmpty = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

export const ActionArea = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  div {
    flex: 6;
  }

  button {
    font-size: 0.875rem;
    font-weight: 500;
    width: 13.25rem;
    flex-shrink: 0;
    height: 2.5rem;
    border-radius: 0.125rem;
  }
`;
