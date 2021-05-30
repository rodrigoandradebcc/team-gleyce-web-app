import React, { useCallback, useEffect, useState } from 'react';
import { FiCalendar } from 'react-icons/fi';
import Card from '../../components/Card';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import api from '../../services/api';

import {
  Container,
  CardList,
  ClassesList,
  ClassesTitle,
  ClassesContainer,
  Class,
} from './styles';

export interface PropsPersonalClass {
  clientName?: string;
  scheduled?: string;
  date?: string;
}

const Dashboard: React.FC<PropsPersonalClass> = ({ clientName }) => {
  const [trainingsExpirationToday, setTrainingsExpirationToday] = useState(0);

  useEffect(() => {
    api.get('/trainings/total-trainings-expiration').then(response => {
      setTrainingsExpirationToday(response.data.trainingExpiredToday);
    });
  }, []);

  console.log('aaa', trainingsExpirationToday);

  return (
    <>
      <MenuBar />

      <div id="mainContainer">
        <Header />
        <Container>
          <h1>Dashboard</h1>
          <CardList>
            <Card
              numberColor="#0096D1"
              cardName="Vencimentos de hoje"
              quantity={trainingsExpirationToday}
            />
            <Card
              numberColor="#F44336"
              cardName="Aulas agendadas pra hoje"
              quantity={3}
            />
            <Card numberColor="#FAC600" cardName="Alunos Ativos" quantity={2} />
            <Card
              numberColor="#4CAF50"
              cardName="Aniversáriantes"
              quantity={1}
            />
          </CardList>
          <ClassesList>
            <ClassesContainer>
              <ClassesTitle color="#e2445c">
                <h3>Aulas de Hoje</h3>
                <FiCalendar />
              </ClassesTitle>
              <Class>
                <h4>
                  Fulano de Tal <span>09:00</span>
                </h4>
                <p>
                  Personal Trainer <span>10:00</span>
                </p>
              </Class>
              <Class>
                <h4>
                  Fulano de Tal <span>09:00</span>
                </h4>
                <p>
                  Personal Trainer <span>10:00</span>
                </p>
              </Class>
            </ClassesContainer>
            <ClassesContainer>
              <ClassesTitle color="#FAC600">
                <h3>Treinos com vencimentos mais próximos</h3>
                <FiCalendar />
              </ClassesTitle>
              <Class>
                <h4>
                  Fulano de Tal <span>09:00</span>
                </h4>
                <p>
                  Personal Trainer <span>10:00</span>
                </p>
              </Class>
              <Class>
                <h4>
                  Fulano de Tal <span>09:00</span>
                </h4>
                <p>
                  Personal Trainer <span>10:00</span>
                </p>
              </Class>
            </ClassesContainer>
          </ClassesList>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
