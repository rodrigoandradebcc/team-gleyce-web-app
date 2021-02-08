import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import GlobalStyle from './styles/global';
import { Content } from './styles';

import Header from './components/Header';
import MenuBar from './components/MenuBar';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Header />
      <Content>
        <MenuBar />
        <Routes />
      </Content>
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
