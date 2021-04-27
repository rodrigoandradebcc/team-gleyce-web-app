import styled from 'styled-components';

interface Props {
  center?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  background-color: var(--background-content);
  padding: 12px;
`;

export const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 16px;

  width: inherit;
`;

export const Message = styled.span``;

export const ScreenName = styled.h3`
  margin-top: 15px;
`;

export const ExerciseList = styled.div`
  padding: 0 15px;
`;

export const Head = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  padding-bottom: 5px;
  border-bottom: 1px solid #a1a1a1;
`;

export const HeadColumn = styled.p<Props>`
  width: 20%;
  text-transform: uppercase;
  color: #a1a1a1;
  font-size: 16px;

  text-align: ${props => (props.center ? 'center' : 'left')};
`;

export const RegisterButton = styled.button`
  border: 0;
  outline: 0;
  cursor: pointer;
  padding: 10px 15px;
  background: #d52b1e;
  color: #fff;
  border-radius: 5px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Line = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 15px 0;

  & + div {
    border-top: 1px solid #bcbcbc;
  }
`;

export const Column = styled.div<Props>`
  width: 20%;
  text-align: ${props => (props.center ? 'center' : 'left')};

  svg {
    height: 25px;
    width: 25px;
    cursor: pointer;

    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Name = styled.div`
  text-transform: uppercase;
`;

export const Group = styled.div`
  text-transform: uppercase;
`;

export const LinkVideo = styled.a`
  text-decoration: none;
  color: #000;
  cursor: pointer;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 25px;
    width: 25px;
    cursor: pointer;

    & + svg {
      margin-left: 15px;
    }

    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const EmptySpace = styled.div``;
