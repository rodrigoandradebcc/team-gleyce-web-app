import styled from 'styled-components';

interface AvatarProps {
  size?: number;
}

export const Container = styled.div<AvatarProps>`
  width: 100%;
  height: 100%;

  max-width: ${props => props.size && `${props.size}px`};
  max-height: ${props => props.size && `${props.size}px`};

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Image = styled.img`
  vertical-align: middle;
  border-radius: 50%;
`;

export const AvatarContainer = styled.div`
  width: 100%;
  height: 100%;

  background: #f7f7f7;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #ffc62d;

  p {
    /* font-size: calc(6rem); */
    font-size: auto;
    font-weight: 600;
    color: #ffc62d;
    line-height: 1;
  }
`;
