import { format } from 'date-fns';
import React, { ButtonHTMLAttributes, useCallback } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { ImWhatsapp } from 'react-icons/im';
import { MdModeEdit } from 'react-icons/md';
import { useHistory } from 'react-router';
import Avatar from '../Avatar';
import {
  ActionButtons,
  ActionsContainer,
  Bottom,
  Container,
  Data,
  EditCardButton,
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

interface StudentProps {
  id: string;
  full_name: string;
  cpf: string;
  date_of_birth: string;
  active: boolean;
  email: string;
  phone: string;
  password: string;
  last_acess: string;
  photo: string;
  plan_type: string;
  observation: string;
}

interface CardStudentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  user: StudentProps;
  handleToggleActiveUser: (id: string) => Promise<void>;
  id: string;
  handleToggleDrawer: () => void;
  handleToggleDeleteModal: () => void;
  setSelectedStudent: (user: StudentProps) => void;
}

const CardStudent: React.FC<CardStudentProps> = ({
  handleToggleActiveUser,
  handleToggleDrawer,
  handleToggleDeleteModal,
  id,
  user,
  setSelectedStudent,
}) => {
  const history = useHistory();

  const handleToggleSwitch = useCallback(() => {
    handleToggleActiveUser(id);
  }, [handleToggleActiveUser, id]);

  const dateFormatted = format(new Date(user.last_acess), 'dd/mm/yyyy');

  function handleGoToTrainingsPage(): void {
    history.push('/trainings', {
      idSelected: id,
      studentName: user.full_name,
    });
  }

  return (
    <Container>
      <ActionButtons>
        <EditCardButton
          onClick={() => {
            handleToggleDrawer();
            setSelectedStudent(user);
          }}
        >
          <MdModeEdit />
        </EditCardButton>
        <EditCardButton
          onClick={() => {
            setSelectedStudent(user);
            handleToggleDeleteModal();
          }}
        >
          <FiTrash2 />
        </EditCardButton>
      </ActionButtons>

      <Top>
        <Data>
          <SwitchContainer>
            <Switch onClick={handleToggleSwitch}>
              <input
                type="checkbox"
                checked={user.active}
                onChange={() => console.log(!user.active)}
              />
              <span className="slider round" />
            </Switch>
          </SwitchContainer>

          <Plan isActive={user.active}>{user.plan_type}</Plan>
          <LastAccess>Venc. {dateFormatted}</LastAccess>
        </Data>

        <StudentPhoto isActive={user.active}>
          <Avatar size={5} src="" userName={user.full_name} />
        </StudentPhoto>
      </Top>

      <Bottom>
        <StudentName>{user.full_name}</StudentName>

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
