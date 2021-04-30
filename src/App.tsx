import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import GlobalStyle from './styles/global';

import MenuBar from './components/MenuBar';
import Header from './components/Header';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <GlobalStyle />
      <MenuBar />
      <div id="mainContainer">
        <Header />
        <Routes />
      </div>
    </BrowserRouter>
  </>
);

export default App;
