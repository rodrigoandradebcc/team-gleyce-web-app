import styled from 'styled-components';
import { NewInput } from '../NewInput';
import ButtonIcon from '../ButtonIcon';

export const Container = styled.div``;

export const ContainerModal = styled.div`
  > button {
    margin-top: 2rem;
  }
`;

export const IconButton = styled(ButtonIcon)`
  svg {
    color: #bbbbbb;
  }
`;

export const DescriptionInput = styled(NewInput)`
  background: #ffffff;
  border: 1px solid #f1f1f1;
  box-sizing: border-box;
  border-radius: 2px;
  width: 50px;

  input {
    font-size: 12px !important;
  }

  width: 339px;
`;

export const LogoAndTitleModal = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  p {
    font-size: 24px;
    font-weight: 500;
  }

  svg {
    margin-right: 10px;
  }
`;

export const Label = styled.p`
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

export const LabelAndInputArea = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 1rem;
  }
`;

export const FormDescription = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const LabelContent = styled.div`
  display: flex;
  width: 100%;
  /* margin: 1.5rem 0 4px; */

  div:last-child {
    justify-content: center;
  }
`;

export const LabelItem = styled.div`
  display: flex;
  width: 50%;

  &:nth-child(1) {
    margin-left: 1rem;
  }

  p {
    font-weight: 500;
    font-size: 12px;
    color: #3d4047;
    text-transform: uppercase;
  }

  text-align: center;
`;

export const SectionPlans = styled.section`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  height: 300px;
`;

export const PlanContent = styled.div`
  display: flex;
  width: 100%;
  border-radius: 2px;
  min-height: 48px;

  & + & {
    margin-top: 0.5rem;
  }

  div:last-child {
    justify-content: center;

    svg + svg {
      margin-left: 1rem;
    }
  }
`;

export const PlanItem = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  background: var(--white);

  &:nth-child(1) {
    p {
      margin-left: 1rem;
    }
  }
`;

export const PlanContainer = styled.div`
  height: 21rem;
  overflow: hidden;
`;
