import React from 'react';

import Card from '../../components/Card';
import PersonalClass from '../../components/PersonalClass';

import {
  Container,
  CardList,
  Welcome,
  NearestClasses,
  HeadNearestClasses,
  BodyNearestClasses,
} from './styles';

export interface PropsPersonalClass {
  clientName?: string;
  scheduled?: string;
  date?: string;
}

const Dashboard: React.FC<PropsPersonalClass> = ({ clientName }) => {
  return (
    <Container>
      {/* <Separator /> */}
      <Welcome>
        <span>Bem vindo, FULANO DE TAL</span>
        <strong>Dashboard</strong>
      </Welcome>
      <CardList>
        <Card
          numberColor="#0096D1"
          cardName="Vencimentos de hoje"
          quantity={5}
        />
        <Card
          numberColor="#F44336"
          cardName="Aulas agendadas pra hoje"
          quantity={3}
        />
        <Card numberColor="#FAC600" cardName="Alunos Ativos" quantity={2} />
        <Card numberColor="#4CAF50" cardName="Aniversáriantes" quantity={1} />
      </CardList>
      <NearestClasses>
        <HeadNearestClasses>
          <p>Aulas de personais mais próximas</p>
          <p>Ver todas as aulas</p>
        </HeadNearestClasses>
        <BodyNearestClasses>
          {/* <PersonalClass clientName={clientName} /> */}
          <PersonalClass />
          <PersonalClass />
          <PersonalClass />
        </BodyNearestClasses>
      </NearestClasses>
    </Container>
  );
};

export default Dashboard;
