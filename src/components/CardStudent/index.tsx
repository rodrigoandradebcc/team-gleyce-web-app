import React, { ButtonHTMLAttributes, useCallback } from 'react';
import { useHistory } from 'react-router';
import { format } from 'date-fns';
import { FiChevronRight } from 'react-icons/fi';

import {
  Container,
  LastAccess,
  Plan,
  SendMessage,
  Status,
  StatusStudent,
  StudentName,
  StudentPhoto,
  ActionsContainer,
  SwitchContainer,
  Switch,
  Go,
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
  photo,
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
    history.push('/trainings', {
      idSelected: id,
      studentName: name,
    });
  }

  return (
    <Container>
      <StatusStudent isActive={isActive}>
        <StudentPhoto src={photo} />
        <Status>{isActive ? 'Ativo' : 'Inativo'}</Status>
      </StatusStudent>

      <StudentName>{name}</StudentName>
      <Plan>Plano: {plan_type}</Plan>
      <LastAccess>Último acesso: {dateFormatted}</LastAccess>
      <SendMessage>Enviar mensagem</SendMessage>

      <ActionsContainer>
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

        {isActive && (
          <Go onClick={handleGoToTrainingsPage}>
            <FiChevronRight size={34} />
          </Go>
        )}
      </ActionsContainer>
    </Container>
  );
};

export default CardStudent;
