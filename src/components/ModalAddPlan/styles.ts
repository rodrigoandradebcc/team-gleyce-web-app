import styled from 'styled-components';

export const Container = styled.div``;

export const ContainerModal = styled.div`
  button {
    margin-top: 32px;
    font-weight: 600;
  }
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
