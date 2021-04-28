import React from 'react';
import { FiCalendar } from 'react-icons/fi';
import Card from '../../components/Card';

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
  return (
    <Container>
      <h1>Dashboard</h1>
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
  );
};

export default Dashboard;

/* <NearestClasses> */
// <HeadNearestClasses>
// <p>Aulas de personais mais próximas</p>
//   // <p>Ver todas as aulas</p>
// </HeadNearestClasses>
// <BodyNearestClasses>
/* <PersonalClass clientName={clientName} /> */
//     <PersonalClass />
//     <PersonalClass />
//     <PersonalClass />
//   </BodyNearestClasses>
// </NearestClasses>
