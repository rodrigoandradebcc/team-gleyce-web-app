import React from 'react';

import { Container, Image, AvatarContainer } from './styles';

interface AvatarProps {
  src: string;
  userName: string;
  alt?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src = '',
  userName = '',
  alt = '',
}) => {
  return (
    <Container>
      {src === '' ? (
        <AvatarContainer>
          <p>{userName[0]}</p>
        </AvatarContainer>
      ) : (
        <Image src={src} alt={src ? alt : ''} />
      )}
    </Container>
  );
};

export default Avatar;
