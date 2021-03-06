import SelectComponent from 'react-select';
import styled, { css } from 'styled-components';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import ButtonRod from '../ButtonRod';

export const ContainerDatePicker = styled.div`
  display: flex;
  flex-direction: column;

  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    background: var(--yellow);
    border-radius: 100%;
  }

  .DayPicker-Day {
    /* border-radius: 80%; */
  }

  .DayPickerInput {
    display: block;
    height: 100%;

    input {
      flex: 1;
      font-size: 1rem;
      padding: 1rem 1rem;
      border: 1px solid #f1f1f1;

      width: 100% !important;
      height: 100%;
    }
  }
`;

export const DayPicker = styled(DayPickerInput)`
  /* .DayPickerInput {
    display: block;
    width: 100%;
  } */

  .DayPickerInput {
    width: 400px !important;
  }
`;

export const Button = styled(ButtonRod)`
  width: 344px;
  border-radius: 2px;
`;

export const Label = styled.p`
  font-weight: bold;
  font-size: 0.875rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

export const ContainerSwitch = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;

export const LogoAndTitleModal = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  p {
    font-size: 1.5rem;
    font-weight: 500;
  }

  svg {
    margin-right: 0.625rem;
  }
`;

export const Form = styled.form`
  @media (max-width: 800px) {
    padding: 6px;
  }

  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 600;
    font-size: 2.25rem;
    line-height: 2.25rem;
    margin-bottom: 2.5rem;
  }

  button {
    margin-top: 3rem;
    align-self: flex-end;
  }

  > div + div {
    padding-top: 1.25rem;
    display: flex;
    flex-direction: column;
  }

  .switch {
    display: flex;
    flex-direction: column;
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
    border: 0;
    background: var(--yellow);
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;

    .text {
      padding: 1rem 1.5rem;
    }

    .icon {
      display: flex;
      padding: 1rem 1rem;
      background: var(--yellow);
      border-radius: 0 0.5rem 0.5rem 0;
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
  margin-right: 0.9375rem;
  font-size: 1rem;
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
    border-radius: 2.125rem;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
