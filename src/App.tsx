import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import GlobalStyle from './styles/global';

import MenuBar from './components/MenuBar';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <GlobalStyle />
      <MenuBar />
      <Routes />
    </BrowserRouter>
  </>
);

export default App;
