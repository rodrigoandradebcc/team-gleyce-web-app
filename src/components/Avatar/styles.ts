import styled from 'styled-components';

export const Container = styled.div`
  /* margin: 0.625rem; */
  width: 100%;
  height: 100%;
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

  background: #c1c1c1;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: calc(6rem);
    color: #fff;
    line-height: 1;
  }
`;
