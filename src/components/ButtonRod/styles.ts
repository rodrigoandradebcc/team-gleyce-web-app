import styled, { css } from 'styled-components';
import { lighten } from 'polished';

interface ButtonProp {
  background?: string;
  fontSize?: number;
  fontColor?: string;
  outlined?: boolean;
  disabled?: boolean;
  heightSize?: 'small' | 'medium' | 'large' | 'big' | undefined;
  fullWidth?: boolean;
  loading?: boolean;
  outlinedColor?: string;
}

const BackGroundMix = css<ButtonProp>`
  ${props => {
    return props.background ? `${props.background}` : '(--yellow)';
  }}
`;

export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChildrenLoading = styled.div`
  position: relative;
  color: transparent;
`;

export const Container = styled.button<ButtonProp>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 64px;
  position: relative;
  background: ${props =>
    props.background ? `${props.background}` : 'var(--yellow)'};
  font-size: ${props => props.fontSize && `${props.fontSize}px`};
  color: ${props => (props.fontColor ? `${props.fontColor}` : '#fff')};
  border-radius: 2px;
  border: 0;
  width: ${props => (props.fullWidth ? '100%' : 'fit-content')};
  user-select: none;
  transition: filter 0.2s;

  ${props =>
    props.disabled &&
    css`
      pointer-events: auto;
      cursor: not-allowed;
      opacity: 0.6;
      color: rgba(0, 0, 0, 0.25);
      background: #f5f5f5;
      border: 1px solid #d9d9d9;
    `}
  ${props =>
    !props.disabled &&
    !props.loading &&
    css`
      &:hover {
        filter: brightness(1.1);
        box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
          0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
        background: ${BackGroundMix};
      }
      &:after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
        background-repeat: no-repeat;
        background-position: 50%;
        transform: scale(10, 10);
        opacity: 0;
        transition: transform 0.5s, opacity 1s;
      }
      &:active:after {
        transform: scale(0, 0);
        opacity: 0.3;
        transition: 0s;
      }
    `}
  ${props =>
    props.loading &&
    css`
      pointer-events: auto;
      cursor: not-allowed;
      opacity: 0.6;
    `}
  ${props =>
    props.outlined &&
    css`
      background: transparent;
      border: 1px solid #d9d9d9;
      color: rgba(0, 0, 0, 0.85);
      &:hover {
        background: ${lighten(0.9, '#000')};
      }
    `}
    ${props =>
    props.outlinedColor &&
    css`
      color: ${props.outlinedColor};
      border-color: ${props.outlinedColor};
      &:hover {
        background: ${lighten(0.9, '#000')};
      }
    `}
  ${props =>
    props.heightSize === 'small' &&
    css`
      height: 2rem;
      padding: 0.25rem 0.625px;
    `}
  ${props =>
    (props.heightSize === 'medium' || !props.heightSize) &&
    css`
      height: 2.25rem;
      padding: 0.375rem 1rem;
    `}
  ${props =>
    props.heightSize === 'large' &&
    css`
      height: 2.625rem;
      padding: 0.5rem 1.375rem;
    `}
    ${props =>
    props.heightSize === 'big' &&
    css`
      height: 56px;
    `}
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
`;
