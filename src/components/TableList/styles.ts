import styled from 'styled-components';

export const Container = styled.div``;

export const Table = styled.table`
  width: 100%;
  table-layout: auto;

  thead tr th {
    text-align: left;
  }

  tr th {
    text-transform: uppercase;
    font: 1rem 500 Visby, sans-serif;
  }

  th,
  td {
    padding: 14px 0px;
  }

  tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  thead tr {
    border-bottom: 1px solid #dddddd;
  }

  thead tr th:nth-child(4) {
    text-align: center;

    min-width: 100px;
  }

  tbody tr td:nth-child(4) {
    display: flex;

    justify-content: center;
    align-items: center;
  }
`;

export const ContainerTable = styled.div`
  display: flex;

  width: 100%;
  overflow: auto;
`;

export const Pagination = styled.div`
  display: flex;
  width: 100%;

  justify-content: flex-end;

  margin: 32px 0;

  > div + div {
    margin-left: 16px;
    background: red;
  }
`;

export const Actions = styled.div`
  svg + svg {
    margin-left: 2rem;
  }
`;
