import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.56rem 1.5rem;
  border-radius: 0.125rem;
  /* margin-bottom: 12px; */

  box-shadow: 2px 4px 6px rgba(181, 181, 181, 0.25);
  background-color: #fff;

  min-width: 18.25rem;
  flex-shrink: 0;

  flex: 1;

  /* &:not(:last-child) {
    margin-right: 24px;
  } */
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  color: #3d3d3d;
  font-size: 1rem;
  font-weight: 600;
  text-transform: capitalize;
`;

export const Quantity = styled.span`
  margin-top: 16px;
  color: #3d3d3d;
  font-size: 2.25rem;
  font-weight: 600;
`;

interface GoProps {
  colortype: string;
}

export const Go = styled(Link)<GoProps>`
  text-decoration: none;
  border: 1px solid ${props => props.colortype};
  border-radius: 0.875rem;

  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: all 0.8s;

  svg {
    color: ${props => props.colortype};
    font-size: 24px;
    width: 1.375rem;
    height: 1.375rem;
  }

  &:hover {
    background-color: ${props => props.colortype};

    svg {
      color: #fff;
    }
  }
`;
