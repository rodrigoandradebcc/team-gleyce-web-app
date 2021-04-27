import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 16px 24px;
  border-radius: 8px;
  margin-bottom: 12px;

  box-shadow: 2px 4px 6px rgba(181, 181, 181, 0.25);
  background-color: #fff;

  flex: 1;

  &:not(:last-child) {
    margin-right: 24px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  color: #3d3d3d;
  font-size: 12px;
`;

export const Quantity = styled.span`
  margin-top: 16px;
  color: #3d3d3d;
  font-size: 36px;
`;

interface GoProps {
  colortype: string;
}

export const Go = styled(Link)<GoProps>`
  text-decoration: none;
  border: 1px solid ${props => props.colortype};
  padding: 7px;
  border-radius: 14px;

  cursor: pointer;

  transition: all 0.8s;

  svg {
    color: ${props => props.colortype};
    font-size: 24px;
  }

  &:hover {
    background-color: ${props => props.colortype};

    svg {
      color: #fff;
    }
  }
`;
