import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  background-color: var(--background-content);
  padding: 2.69rem;

  overflow-y: auto;

  h1 {
    font: 500 1.5rem 'IBM Plex Sans', sans-serif;
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
  font: 400 1rem 'IBM Plex Sans', sans-serif;
  text-transform: capitalize;
`;

export const ContainerCardsStudents = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  > div {
    margin-right: 10px;
  }
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
    font: 500 0.875rem 'IBM Plex Sans', sans-serif;
    flex: 1;
    width: 13.25rem;
    height: 2.5rem;
    border-radius: 0.125rem;
  }
`;
