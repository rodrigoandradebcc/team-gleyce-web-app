import styled from 'styled-components';

export const LabelAndButton = styled.div``;

export const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  padding: 0 64px;

  margin-top: 4rem; */

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  background-color: var(--background-content);
  padding: 0.8125rem 2.69rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    overflow-x: auto;
  }
  th {
    color: var(--text-body);
    font-weight: 400;
    /* padding: 1rem 2rem; */
    padding: 0.375rem 1rem;

    text-align: left;
    line-height: 1.5rem;
  }
  td {
    /* padding: 0.375rem 1rem; */
    border: 0;
    color: var(--text-body);
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
