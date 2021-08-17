import styled from 'styled-components';
import Button from '../../components/ButtonRod';

interface Props {
  center?: boolean;
}

export const ButtonExercices = styled(Button)`
  padding: 1.28rem 1.5rem;
  p {
    line-height: 26px;
  }
`;

export const ButtonLink = styled(Button)`
  background: none;
  width: 46px;
  height: 46px;
  border-radius: 5px;
  svg {
    color: black;
  }
`;

export const IconGroup = styled.div`
  display: flex;
  button + button {
    margin-left: 20px;
  }
  align-items: center;
`;

export const ExerciseDash = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ExerciseTable = styled.div`
  border: 1px solid red;
  padding: 0 17px;
  display: flex;
  justify-content: space-around;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  background-color: var(--background-content);
  padding: 12px;
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  margin: 16px 16px;
  width: inherit;
`;

export const ScreenName = styled.h3`
  margin-top: 15px;
`;

export const Head = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 1px solid #a1a1a1;
`;

export const Body = styled.div`
  width: 100%;
  padding: 0 17px;
  table {
    th tr {
      justify-content: space-between;
    }
    th:last-child {
      align-items: center;
    }
    th {
      width: 30%;
    }
    th,
    td {
      background: var(--background-content);
      padding-left: 0;
      border-bottom: 1px solid #dddddd;
    }

    th:before {
      display: none;
    }
    th {
      text-transform: uppercase;
    }
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
export const EmptySpace = styled.div``;
