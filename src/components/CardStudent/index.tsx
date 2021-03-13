import React, { ButtonHTMLAttributes, useCallback } from 'react';
import {
  Container,
  LastAccess,
  Plan,
  SendMessage,
  Status,
  StatusStudent,
  StudentName,
  StudentPhoto,
  Switch,
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
  const teste = useCallback(() => {
    handleToggleActiveUser(id);
  }, [handleToggleActiveUser, id]);

  return (
    <Container>
      <StatusStudent>
        <StudentPhoto src={photo} />
        <Status>{isActive ? 'Ativo' : 'Inativo'}</Status>
      </StatusStudent>

      <StudentName>{name}</StudentName>
      <Plan>Plano: {plan_type}</Plan>
      <LastAccess>Último acesso: {last_access}</LastAccess>
      <SendMessage>Enviar mensagem</SendMessage>

      {/* <Switch> */}
      <input type="checkbox" checked={isActive} onChange={teste} />
      {/* <span className="slider round" /> */}
      {/* </Switch> */}
    </Container>
  );
};

export default CardStudent;
