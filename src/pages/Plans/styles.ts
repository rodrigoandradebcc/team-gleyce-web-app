import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  background-color: var(--background-content);
  padding: 12px;
`;

export const ContainerExercises = styled.div`
  width: 100%;
  background: red;
`;

export const SelectContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  .css-2b097c-container {
    width: 80%;
  }

  .css-yk16xz-control {
    min-height: 40px;
  }

  button {
    min-height: 40px;
  }
`;

export const SelectAndButton = styled.div`
  /* background: #e13; */
  width: 50%;
  display: flex;

  button {
    margin-left: 8px;
    flex: 1;
    min-height: 40px;
  }
`;
