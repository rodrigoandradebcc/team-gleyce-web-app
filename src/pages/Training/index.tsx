import { format, parseISO } from 'date-fns';
import React, { useCallback, useEffect, useState } from 'react';
import { IoMdCalendar } from 'react-icons/io';
import { MdModeEdit } from 'react-icons/md';
import { useHistory, useLocation } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import ButtonRod from '../../components/ButtonRod';
import DrawerEditTraining from '../../components/DrawerEditTraining';
import DropdownMenu from '../../components/DropdownMenu';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import ModalAddTraining from '../../components/ModalAddTraining';
import Tabs from '../../components/TabsTrainings';
import api from '../../services/api';
import * as S from './styles';

interface HistoryProps {
  idSelected: string;
  studentName: string;
}

interface TrainingProps {
  id: string;
  name: string;
  observation: string;
  note: string;
  expiration_date: string;
  user_id: string;
}

const Training: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [trainingSelected, setTrainingSelected] = useState<TrainingProps>(
    {} as TrainingProps,
  );

  useEffect(() => {
    console.log('fora', trainingSelected);
  }, [trainingSelected]);

  const handleToggleModalAddTraining = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  const handleToggleDrawer = useCallback(() => {
    setDrawerOpen(!drawerOpen);
  }, [drawerOpen]);

  const trainingTypes = [
    { id: '1', description: 'Todos' },
    { id: '2', description: 'Ativos' },
    { id: '3', description: 'Inativos' },
  ];

  const [typeTrainingActive, setTypeTrainingActive] = useState(
    trainingTypes[0].description,
  );

  const location = useLocation<HistoryProps>();

  const { idSelected, studentName } = location.state;

  const [trainings, setTrainings] = useState<TrainingProps[]>();

  const history = useHistory();

  const [idAtualSelecionado, setIdAtualSelecionado] = useState('');

  const getTrainings = useCallback(
    (id: string) => {
      if (typeTrainingActive === 'Ativos') {
        api.get(`/trainings/${id}?tab=active`).then(response => {
          setTrainings(response.data);
        });
      } else if (typeTrainingActive === 'Inativos') {
        api.get(`/trainings/${id}?tab=disabled`).then(response => {
          setTrainings(response.data);
        });
      } else {
        api.get(`/trainings/${id}`).then(response => {
          setTrainings(response.data);
        });
      }
    },
    [typeTrainingActive],
  );

  function changeTabsTrainingTypes(content: string): void {
    setTypeTrainingActive(content);
  }

  const updateTrainings = useCallback(() => {
    getTrainings(idSelected);
  }, [getTrainings, idSelected]);

  async function handleUpdateSelectedTraining(id: string): Promise<void> {
    setIdAtualSelecionado(id);
  }

  useEffect(() => {
    getTrainings(idSelected);
  }, [getTrainings, idSelected]);

  return (
    <>
      <MenuBar />
      <div id="mainContainer">
        <Header />
        <S.Container>
          <S.NameAndLogoContainer>
            <p>{studentName}</p>

            <Avatar src="" userName={studentName} size={2} />
          </S.NameAndLogoContainer>

          <Tabs
            tabsApi={trainingTypes}
            setTypeTrainingActive={changeTabsTrainingTypes}
          />

          <S.ButtonArea>
            <ButtonRod
              background="#FCA311"
              onClick={() => {
                handleToggleModalAddTraining();
              }}
            >
              CADASTRAR TREINO
            </ButtonRod>
          </S.ButtonArea>

          <S.ContainerCards>
            {trainings?.map(training => (
              <S.TrainingCard key={String(training.id)}>
                <S.NameAndExpirationDate>
                  <strong>{training.name}</strong>
                  <div>
                    <IoMdCalendar size={16} />
                    <p>
                      Venc:{' '}
                      {format(parseISO(training.expiration_date), 'dd/MM/yyyy')}
                    </p>
                  </div>
                </S.NameAndExpirationDate>

                <S.ButtonActionsContainer>
                  <S.BtnEditTraining
                    onClick={() => {
                      history.push('/plans', {
                        idSelected: training.id,
                      });
                    }}
                  >
                    <MdModeEdit size={16} />
                    EDITAR EXERCÍCIOS
                  </S.BtnEditTraining>
                  <DropdownMenu
                    id={training.id}
                    handleUpdateSelectedTraining={handleUpdateSelectedTraining}
                    idActualSelectedTeste={idAtualSelecionado}
                    handleDrawer={handleToggleDrawer}
                    training={training}
                    setSelectedTraining={setTrainingSelected}
                  />
                </S.ButtonActionsContainer>
              </S.TrainingCard>
            ))}
          </S.ContainerCards>

          <ModalAddTraining
            isOpen={modalOpen}
            setIsOpen={handleToggleModalAddTraining}
            updateTrainings={updateTrainings}
          />

          <DrawerEditTraining
            isOpen={drawerOpen}
            setIsOpen={handleToggleDrawer}
            titleDrawer="Editar treino"
            training={trainingSelected}
            updateTrainings={updateTrainings}
          />
        </S.Container>
      </div>
    </>
  );
};

export default Training;
