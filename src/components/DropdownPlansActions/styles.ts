import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  z-index: 100;

  width: 214px;
  height: fit-content;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
`;

export const ItemDropdown = styled.div`
  padding: 1rem 1rem;
  background: var(--white);

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
    color: var(--text-body);
  }
`;
