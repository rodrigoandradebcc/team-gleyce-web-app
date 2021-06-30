import React, { ReactNode } from 'react';
import * as S from './styles';

interface SkeletonPlaceholder {
  children: ReactNode;
  animationMode?: 'pulsing' | 'passing';
}

const SkeletonPlaceholder: React.FC<SkeletonPlaceholder> = ({
  children,
  animationMode,
}) => {
  return (
    <S.PlaceholderVertical animationMode={animationMode}>
      {children}
    </S.PlaceholderVertical>
  );
};

export default SkeletonPlaceholder;
