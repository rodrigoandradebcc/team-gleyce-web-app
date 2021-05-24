import { format } from 'date-fns';
import React, { ButtonHTMLAttributes, useCallback } from 'react';
import { ImWhatsapp } from 'react-icons/im';
import { useHistory } from 'react-router';
import Avatar from '../Avatar';
import ButtonRod from '../ButtonRod';
import {
  ActionsContainer,
  Bottom,
  Container,
  Data,
  Go,
  LastAccess,
  Plan,
  SendMessage,
  StudentName,
  StudentPhoto,
  Switch,
  SwitchContainer,
  Top,
} from './styles';

interface CardStudentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  photo: string;
  name: string;
  plan_type?: string;
  last_access: string;
  handleToggleActiveUser: (id: string) => Promise<void>;
  id: string;
}

const CardStudent: React.FC<CardStudentProps> = ({
  isActive,
  name,
  plan_type,
  last_access,
  handleToggleActiveUser,
  id,
}) => {
  const history = useHistory();

  const handleToggleSwitch = useCallback(() => {
    handleToggleActiveUser(id);
  }, [handleToggleActiveUser, id]);

  const dateFormatted = format(new Date(last_access), 'dd/mm/yyyy');

  function handleGoToTrainingsPage(): void {
    console.log(id);
    history.push('/trainings', {
      idSelected: id,
      studentName: name,
    });
  }

  return (
    <Container>
      <Top>
        <Data>
          <SwitchContainer>
            <Switch onClick={handleToggleSwitch}>
              <input
                type="checkbox"
                checked={isActive}
                onChange={() => console.log(!isActive)}
              />
              <span className="slider round" />
            </Switch>
          </SwitchContainer>

          <Plan isActive={isActive}>{plan_type}</Plan>
          <LastAccess>Venc. {dateFormatted}</LastAccess>
        </Data>

        <StudentPhoto isActive={isActive}>
          <Avatar size={5} src="" userName={name} />
        </StudentPhoto>
      </Top>

      <Bottom>
        <StudentName>{name}</StudentName>

        <ActionsContainer>
          <SendMessage>
            <ImWhatsapp />
            Enviar mensagem
          </SendMessage>
          <Go onClick={handleGoToTrainingsPage}>Ver Treinos</Go>
        </ActionsContainer>
      </Bottom>
    </Container>
  );
};

export default CardStudent;
