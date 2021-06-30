import React from 'react';
import AvatarPlaceholder from '../../../../components/Skeleton/AvatarPlaceholder';
import Item from '../../../../components/Skeleton/Item';
import SkeletonPlaceholder from '../../../../components/Skeleton/SkeletonPlaceholder';
import Placeholder from '../../../../components/Skeleton/TextPlaceholder';
import * as S from './styles';

const SkeletonContainerGrid: React.FC = () => {
  return (
    <S.Container>
      <>
        <SkeletonPlaceholder>
          <S.ContainerSkeletonComponent paddingContainer>
            <S.Top>
              <S.DataPlaceholder>
                <Placeholder heightSize={20} percentageWidth={15} />
                <Placeholder percentageWidth={20} />
                <Placeholder percentageWidth={30} />
              </S.DataPlaceholder>
              <AvatarPlaceholder />
            </S.Top>
            <Item>
              <Placeholder heightSize={20} percentageWidth={35} />
              <S.Actions>
                <Placeholder heightSize={40} percentageWidth={45} />
                <Placeholder heightSize={40} percentageWidth={45} />
              </S.Actions>
            </Item>
          </S.ContainerSkeletonComponent>
        </SkeletonPlaceholder>
        <SkeletonPlaceholder>
          <S.ContainerSkeletonComponent paddingContainer>
            <S.Top>
              <S.DataPlaceholder>
                <Placeholder heightSize={20} percentageWidth={15} />
                <Placeholder percentageWidth={20} />
                <Placeholder percentageWidth={30} />
              </S.DataPlaceholder>
              <AvatarPlaceholder />
            </S.Top>
            <Item>
              <Placeholder heightSize={20} percentageWidth={35} />
              <S.Actions>
                <Placeholder heightSize={40} percentageWidth={45} />
                <Placeholder heightSize={40} percentageWidth={45} />
              </S.Actions>
            </Item>
          </S.ContainerSkeletonComponent>
        </SkeletonPlaceholder>
        <SkeletonPlaceholder>
          <S.ContainerSkeletonComponent paddingContainer>
            <S.Top>
              <S.DataPlaceholder>
                <Placeholder heightSize={20} percentageWidth={15} />
                <Placeholder percentageWidth={20} />
                <Placeholder percentageWidth={30} />
              </S.DataPlaceholder>
              <AvatarPlaceholder />
            </S.Top>
            <Item>
              <Placeholder heightSize={20} percentageWidth={35} />
              <S.Actions>
                <Placeholder heightSize={40} percentageWidth={45} />
                <Placeholder heightSize={40} percentageWidth={45} />
              </S.Actions>
            </Item>
          </S.ContainerSkeletonComponent>
        </SkeletonPlaceholder>
        <SkeletonPlaceholder>
          <S.ContainerSkeletonComponent paddingContainer>
            <S.Top>
              <S.DataPlaceholder>
                <Placeholder heightSize={20} percentageWidth={15} />
                <Placeholder percentageWidth={20} />
                <Placeholder percentageWidth={30} />
              </S.DataPlaceholder>
              <AvatarPlaceholder />
            </S.Top>
            <Item>
              <Placeholder heightSize={20} percentageWidth={35} />
              <S.Actions>
                <Placeholder heightSize={40} percentageWidth={45} />
                <Placeholder heightSize={40} percentageWidth={45} />
              </S.Actions>
            </Item>
          </S.ContainerSkeletonComponent>
        </SkeletonPlaceholder>
      </>
    </S.Container>
  );
};

export default SkeletonContainerGrid;
