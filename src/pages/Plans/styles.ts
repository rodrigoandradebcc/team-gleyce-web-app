import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  background-color: var(--background-content);
  padding: 12px;
`;

export const ContainerCards = styled.div`
  margin: 16px 16px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(352px, auto));
  grid-gap: 64px 32px;
  grid-auto-rows: 100px;
`;

export const ContainerExercises = styled.div`
  width: 100%;
  background: red;
`;
