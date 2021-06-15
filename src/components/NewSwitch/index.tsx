import React, { InputHTMLAttributes } from 'react';
import * as S from './styles';

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  changeState: (state: boolean) => void;
  isActive: boolean;
}

const NewSwitch = ({
  isActive,
  changeState,
  ...rest
}: SwitchProps): JSX.Element => {
  return (
    <S.Container>
      <S.Switch onClick={() => changeState(!isActive)}>
        <input
          type="checkbox"
          checked={isActive}
          defaultValue={String(isActive)}
          // eslint-disable-next-line prettier/prettier
          onChange={() => { }}
          {...rest}
        />
        <span className="slider round" />
      </S.Switch>
    </S.Container>
  );
};

export default NewSwitch;
