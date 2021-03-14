import styled, { css } from 'styled-components';
import SelectComponent from 'react-select';

export const Select = styled(SelectComponent)`
  margin-top: 0.25rem;
  display: flex;
  align-items: center;

  > div {
    font-size: 16px;
    background: #fff;
    border-radius: 8px;
    width: 100%;
    border: 0;
    padding: 10px;
  }

  /* div {
    border-radius: 10px;
  }
  ${props =>
    props.primary &&
    css`
      background: black;
      color: black;
    `}
  @media only screen and (max-width: 1000px) {
    margin-right: 0;
    margin-bottom: 10px;
  } */
`;
