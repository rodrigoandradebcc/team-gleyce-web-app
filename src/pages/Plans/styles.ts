import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
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
