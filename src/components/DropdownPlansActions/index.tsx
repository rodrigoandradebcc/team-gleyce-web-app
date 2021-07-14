import React from 'react';
import * as S from './styles';

export function DropdownPlansActions(): JSX.Element {
  return (
    <S.Container>
      <S.ItemDropdown>
        <p>Cadastrar exercício</p>
      </S.ItemDropdown>
      <S.ItemDropdown>
        <p>Excluir treino</p>
      </S.ItemDropdown>
    </S.Container>
  );
}
