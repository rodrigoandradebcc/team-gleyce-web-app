import styled from 'styled-components';
import ButtonRod from '../../components/ButtonRod';

export const ActionArea = styled.div`
  display: flex;
  margin: 0 1rem;

  justify-content: space-between;
  align-items: center;
`;

export const ButtonIcon = styled(ButtonRod)`
  width: 2.5rem;
  height: 2.5rem;

  overflow: initial;
  position: relative;

  background: transparent;
  border: 1px solid var(--yellow);

  > svg {
    color: #bbbbbb;
  }

  transition: background-color 0.6s;
  &:hover {
    background: var(--yellow);

    > svg {
      color: var(--white);
    }
  }
`;

export const ButtonArea = styled.div`
  display: flex;

  > button {
    margin-right: 1rem;
  }

  > button {
    height: 2.5rem;
    font-weight: 600;

    &:hover {
      background: var(--yellow);
      color: var(--white);
    }
  }

  > button:first-child {
    text-transform: uppercase;
  }
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  background: var(--background-content);
  /* padding: 0.8125rem 2.69rem; */
  padding: 0.75rem;

  table {
    border-spacing: 0 0.5rem;
    overflow-x: auto;
    margin-top: 2rem;
    margin: 1rem 1rem;
  }

  th {
    color: var(--text-body-200);
    font-weight: 500;
    font-size: 0.75rem;
    text-transform: uppercase;
    line-height: 1.125rem;
    padding: 0 1rem;

    text-align: left;
    line-height: 1.5rem;
  }

  td {
    font-weight: 500;
    border: 0;
    color: var(--text-body);
    font-size: 0.75rem;
  }

  tbody tr td {
    padding: 0.375rem 1rem;
  }

  tbody tr td input {
    height: 36px;
    border: 1px solid #f1f1f1;
  }

  tbody tr {
    filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.1));
    border-radius: 0.25rem;
    background: #ffffff;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 1rem;

  .css-2b097c-container {
    /* width: 100%; */
    flex: 1;
  }

  .css-14jk2my-container {
    width: 100%;
  }

  .css-yk16xz-control {
    min-height: 40px;
  }

  button {
    height: 2.5rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-left: 1rem;
  }
`;

export const Label = styled.div`
  display: flex;
  width: 100%;

  margin-top: 1rem;

  margin-bottom: 4px;

  p {
    margin: 0 1rem;

    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #3d4047;
    text-transform: uppercase;
  }
`;
