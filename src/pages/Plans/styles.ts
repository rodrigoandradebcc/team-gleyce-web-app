import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  /* 
  justify-content: flex-start;
  
  background-color: var(--background-content); */
  /* padding: 12px; */
  /* flex: 1; */

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    overflow-x: scroll;
  }

  th {
    color: var(--text-body);
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }

  td {
    padding: 1rem 2rem;
    border: 0;
    background: #ffffff;
    color: var(--text-body);
  }

  tbody tr {
    filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.1));
    border-radius: 0.25rem;
  }
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
