import styled from 'styled-components';

interface AvatarProps {
  size: number;
}

export const Container = styled.div<AvatarProps>`
  width: ${props => props.size && `${props.size}rem`};
  height: ${props => props.size && `${props.size}rem`};

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: 4rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Image = styled.img`
  vertical-align: middle;
  border-radius: 50%;
`;

export const AvatarContainer = styled.div<AvatarProps>`
  width: 100%;
  height: 100%;

  background: #f7f7f7;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #ffc62d;

  p {
    font-size: ${props => props.size && `${props.size * 0.9}`}rem;
    font-weight: 400;
    color: #ffc62d;
    line-height: 1;
  }
`;
