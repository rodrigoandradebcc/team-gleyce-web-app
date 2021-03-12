import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Tabs from '../../components/Tabs';
import api from '../../services/api';

import * as S from './styles';

interface HistoryProps {
  idSelected: string;
}

export interface PlanProps {
  id: string;
  description: string;
}

const Plans: React.FC = () => {
  const [plans, setPlans] = useState<PlanProps[]>([] as PlanProps[]);
  const location = useLocation<HistoryProps>();

  const { idSelected } = location.state;

  const getPlansToUser = (id: string): void => {
    api.get(`/plans/${id}`).then(response => {
      setPlans(response.data);
    });
  };

  useEffect(() => {
    getPlansToUser(idSelected);
  }, [idSelected]);

  return (
    <S.Container>
      <h1>Plan</h1>
      {/* <S.ContainerCards>
        {plans?.map(({ id, description }) => (
          <S.PlanCard>{description}</S.PlanCard>
        ))}
      </S.ContainerCards> */}

      <Tabs tabsApi={plans} />
      {/* <S.ContainerExercises>EXERCÍCIOS</S.ContainerExercises> */}
    </S.Container>
  );
};

export default Plans;
