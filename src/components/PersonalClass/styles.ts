import styled from 'styled-components';

import { FaWhatsapp } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  height: 64px;

  img {
    height: 56px;
    width: 56px;
    border-radius: 50%;
  }

  p {
    margin-left: 1rem;
    font-weight: bold;
  }

  & {
    margin: 8px 0;
  }
`;

export const IconWpp = styled(FaWhatsapp)`
  height: 32px;
  width: 32px;
  margin-left: 2rem;
`;
