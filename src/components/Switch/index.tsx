import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react';
import * as S from './styles';

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  changeState: () => void;
  isActive: boolean;
}

const SwitchBase: ForwardRefRenderFunction<HTMLInputElement, SwitchProps> = (
  { name, isActive, changeState, ...rest }: SwitchProps,
  ref,
) => {
  return (
    <S.Container>
      <S.Switch onClick={changeState} ref={ref}>
        <input
          type="checkbox"
          id={name}
          checked={isActive}
          defaultValue={String(isActive)}
          {...rest}
        />
        <span className="slider round" />
      </S.Switch>
    </S.Container>
  );
};

export const Switch = forwardRef(SwitchBase);
