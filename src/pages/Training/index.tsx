import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../../services/api';

import * as S from './styles';

interface HistoryProps {
  idSelected: string;
  studentName: string;
}

interface TraingProps {
  name: string;
  observation: string;
  note: string;
  expiration_date: string;
}

const Training: React.FC = () => {
  const location = useLocation<HistoryProps>();
  const { idSelected, studentName } = location.state;
  const [trainings, setTrainings] = useState<TraingProps[]>();

  const getTrainings = (id: string): void => {
    api.get(`/trainings/${id}`).then(response => {
      setTrainings(response.data);
    });
  };

  useEffect(() => {
    getTrainings(idSelected);
  }, [idSelected]);

  return (
    <S.Container>
      <S.Welcome>
        <S.Message>Bem vindo, FULANO DE TAL</S.Message>
        <S.ScreenName>Treinos {idSelected}</S.ScreenName>
      </S.Welcome>

      <h2>{studentName}</h2>
      <strong>TREINOS ATIVOS ({trainings?.length})</strong>
      <S.ContainerCards>
        {trainings?.map(({ name, expiration_date, observation }) => (
          <S.TrainingCard>
            <strong>{name}</strong>
            <p>{observation}</p>

            <div>Venc: {expiration_date}</div>
          </S.TrainingCard>
        ))}
      </S.ContainerCards>

      <S.InactiveTraininigs>TREINOS INATIVOS (0)</S.InactiveTraininigs>
    </S.Container>
  );
};

export default Training;
