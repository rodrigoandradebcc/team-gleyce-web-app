import { format, parseISO } from 'date-fns';
import React, { useCallback, useEffect, useState } from 'react';
import { IoMdCalendar } from 'react-icons/io';
import { MdModeEdit } from 'react-icons/md';
import { useHistory, useLocation } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import ButtonRod from '../../components/ButtonRod';
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
}

const Training: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleToggleModalAddTraining = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

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

  // useEffect(() => {
  //   console.log('O SELECIONADO', idSelected);
  //   setIdAtualSelecionado(idSelected);
  // }, [idSelected]);

  const getTrainings = (id: string): void => {
    api.get(`/trainings/${id}`).then(response => {
      setTrainings(response.data);
    });
  };

  function teste(content: string): void {
    setTypeTrainingActive(content);
  }

  async function handleUpdateSelectedTraining(id: string): Promise<void> {
    setIdAtualSelecionado(id);
  }

  useEffect(() => {
    getTrainings(idSelected);
  }, [idSelected, trainings]);

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

          <Tabs tabsApi={trainingTypes} setTypeTrainingActive={teste} />

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
            {trainings?.map(({ name, expiration_date, observation, id }) => (
              <S.TrainingCard key={id}>
                <S.NameAndExpirationDate>
                  <strong>{name}</strong>
                  <div>
                    <IoMdCalendar size={16} />
                    <p>
                      Venc: {format(parseISO(expiration_date), 'dd/MM/yyyy')}
                    </p>
                  </div>
                </S.NameAndExpirationDate>

                <S.ButtonActionsContainer>
                  <S.BtnEditTraining
                    onClick={() => {
                      history.push('/plans', {
                        idSelected: id,
                      });
                    }}
                  >
                    <MdModeEdit size={16} />
                    EDITAR EXERCÍCIOS
                  </S.BtnEditTraining>
                  <DropdownMenu
                    id={id}
                    handleUpdateSelectedTrainning={handleUpdateSelectedTraining}
                    idActualSelectedTeste={idAtualSelecionado}
                  />
                </S.ButtonActionsContainer>
              </S.TrainingCard>
            ))}
          </S.ContainerCards>
          {/* <strong>TREINOS ATIVOS ({trainings?.length})</strong> */}

          {/* <S.InactiveTraininigs>TREINOS INATIVOS (0)</S.InactiveTraininigs> */}
          <ModalAddTraining
            isOpen={modalOpen}
            setIsOpen={handleToggleModalAddTraining}
          />
        </S.Container>
      </div>
    </>
  );
};

export default Training;
