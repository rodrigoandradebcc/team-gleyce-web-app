import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './hooks/AuthContext';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
        <ToastContainer autoClose={3000} />
      </AuthProvider>
    </BrowserRouter>
  </>
);

export default App;
