import React from 'react';

import {
  Container,
  StatusStudent,
  StudentPhoto,
  Status,
  StudentName,
  Plan,
  LastAccess,
  SendMessage,
  Switch,
} from './styles';

interface CardStudentProps {
  isActive: boolean;
  photo: string;
  name: string;
  plan: string;
  last_access: string;
}

const CardStudent: React.FC<CardStudentProps> = ({
  isActive = false,
  photo,
  name,
  plan,
  last_access,
}) => {
  return (
    <Container>
      <StatusStudent>
        <StudentPhoto src={photo} />
        <Status>{isActive ? 'Ativo' : 'Inativo'}</Status>
      </StatusStudent>

      <StudentName>{name}</StudentName>
      <Plan>Plano: {plan}</Plan>
      <LastAccess>Último acesso: {last_access}</LastAccess>
      <SendMessage>Enviar mensagem</SendMessage>

      <Switch>
        <input type="checkbox" checked={isActive} />
        <span className="slider round" />
      </Switch>
    </Container>
  );
};

export default CardStudent;
