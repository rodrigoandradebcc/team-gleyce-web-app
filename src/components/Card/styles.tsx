import styled from 'styled-components';

import { Props } from '.';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 320px;
  width: 100%;
  background: #fff;
  /* border: 1px solid #e0e0e0; */
  border-radius: 10px;

  a {
    margin-top: 40px;
    text-decoration: none;
    color: #673ab7;
  }

  & + div {
    margin-left: 20px;
  }
`;

export const Title = styled.h1<Props>`
  color: ${props => (props.numberColor ? props.numberColor : '')};
  margin-top: 16px;
  font-size: 100px;
  line-height: 0;
  font-weight: normal;
  margin-bottom: 3.75rem;
`;
