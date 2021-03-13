import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  background-color: var(--background-content);
  border-radius: 24px;
  padding: 12px;

  max-height: 99vh;
  overflow-y: auto;
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
  padding: 15px;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 5px;
  margin-bottom: 10px;
`;

export const Result = styled.div`
  text-transform: uppercase;
`;

export const ButtonCreateStudent = styled.button`
  text-transform: uppercase;
  border: 0;
  padding: 10px;
  color: #fff;
  background-color: var(--wine);
  outline: 0;
  border-radius: 5px;
  cursor: pointer;
  transition: filter 0.4s;

  &:hover {
    filter: brightness(0.8);
  }
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
