import { format, parseISO } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { IoMdCalendar } from 'react-icons/io';
import { MdModeEdit } from 'react-icons/md';
import { useHistory, useLocation } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import ButtonIcon from '../../components/ButtonIcon';
import ButtonRod from '../../components/ButtonRod';
import DropdownMenu from '../../components/DropdownMenu';
import Tabs from '../../components/TabsT';
import api from '../../services/api';
import * as S from './styles';

interface HistoryProps {
  idSelected: string;
  studentName: string;
}

interface TraingProps {
  id: string;
  name: string;
  observation: string;
  note: string;
  expiration_date: string;
}

interface DropdownMenuProps {
  isActive: boolean;
  actualTrainningIdSelected: string;
}

const Training: React.FC = () => {
  const trainingTypes = [
    { id: '1', description: 'Todos' },
    { id: '2', description: 'Ativos' },
    { id: '3', description: 'Inativos' },
  ];

  const location = useLocation<HistoryProps>();

  const { idSelected, studentName } = location.state;

  const [trainings, setTrainings] = useState<TraingProps[]>();

  const history = useHistory();

  const [idAtualSelecionado, setIdAtualSelecionado] = useState('');

  useEffect(() => {
    console.log('O SELECIONADO NA PARTE DE FORA', idAtualSelecionado);
  }, [idAtualSelecionado]);

  const getTrainings = (id: string): void => {
    api.get(`/trainings/${id}`).then(response => {
      setTrainings(response.data);
    });
  };

  async function handleUpdateSelectedTrainning(id: string): Promise<void> {
    setIdAtualSelecionado(id);
  }

  useEffect(() => {
    getTrainings(idSelected);
  }, [idSelected]);

  return (
    <S.Container>
      <S.NameAndLogoContainer>
        <p>{studentName}</p>

        <Avatar src="" userName={studentName} size={32} />
      </S.NameAndLogoContainer>

      <Tabs tabsApi={trainingTypes} />

      <S.ButtonArea>
        <ButtonRod background="#FCA311">CADASTRAR TREINO</ButtonRod>
      </S.ButtonArea>

      <S.ContainerCards>
        {trainings?.map(({ name, expiration_date, observation, id }) => (
          <S.TrainingCard>
            <S.NameAndExpirationDate>
              <strong>{name}</strong>
              <div>
                <IoMdCalendar size={16} />
                <p>Venc: {format(parseISO(expiration_date), 'dd/MM/yyyy')}</p>
              </div>
            </S.NameAndExpirationDate>

            <S.ButtonActionsContainer>
              <ButtonIcon
                onClick={() => {
                  history.push('/plans', {
                    idSelected: id,
                  });
                  // console.log(id);
                }}
              >
                <MdModeEdit size={16} />
                EDITAR EXERCÍCIOS
              </ButtonIcon>
              <DropdownMenu
                id={id}
                handleUpdateSelectedTrainning={handleUpdateSelectedTrainning}
                idActualSelectedTeste={idAtualSelecionado}
              />
            </S.ButtonActionsContainer>
            {/* <p>{observation}</p> */}
          </S.TrainingCard>
        ))}
      </S.ContainerCards>
      {/* <strong>TREINOS ATIVOS ({trainings?.length})</strong> */}

      {/* <S.InactiveTraininigs>TREINOS INATIVOS (0)</S.InactiveTraininigs> */}
    </S.Container>
  );
};

export default Training;
