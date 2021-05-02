import styled, { css } from 'styled-components';
import { Form as Unform } from '@unform/web';
import SelectComponent from 'react-select';

export const Label = styled.label`
  color: #e6b600;
  /* padding-left: 0.12rem; */
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 5rem;
`;

export const Form = styled(Unform)`
  padding: 48px 40px;
  @media (max-width: 800px) {
    padding: 6px;
  }
  display: flex;
  flex-direction: column;
  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 40px;
    font-family: 'Poppins', sans-serif;
  }
  button {
    margin-top: 48px;
    align-self: flex-end;
  }
  > div + div {
    padding-top: 1.25rem;
    display: flex;
    flex-direction: column;
    /* padding-bottom: 16px; */
  }
  .two-inputs {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    > div {
      width: 100%;
    }
    > div + div {
      margin-left: 1.62rem;
    }
    @media (max-width: 800px) {
      flex-direction: column;
      > div + div {
        margin-left: 0;
        padding-top: 1.25rem;
      }
    }
  }
  button {
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: #e6b600;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    .text {
      padding: 16px 24px;
    }
    .icon {
      display: flex;
      padding: 16px 16px;
      background: #e6b600;
      border-radius: 0 8px 8px 0;
      margin: 0 auto;
    }
    @media (max-width: 800px) {
      margin: 1.25rem auto 0 auto;
    }
  }
`;

export const Select = styled(SelectComponent)`
  margin-top: 0.25rem;
  width: 100%;
  margin-right: 15px;
  font-size: 16px;
  background-color: transparent;

  div {
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
  }
`;

export const Switch = styled.div`
  margin-left: 20px;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: var(--yellow);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--yellow);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
