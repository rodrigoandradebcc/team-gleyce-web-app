import React, {
  createContext,
  ReactNode,
  useCallback,
  useState,
  useContext,
} from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';

interface SignInCredentialsProps {
  email: string;
  password: string;
}

interface UserProps {
  id: string;
  name: string;
  email: string;
}

interface AuthContextProps {
  user: UserProps;
  signIn: (credentials: SignInCredentialsProps) => Promise<void>;
  signOut(): void;
}

interface AuthState {
  token: string;
  user: UserProps;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@TeamGleyce:token');
    const user = localStorage.getItem('@TeamGleyce:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post('sessions', {
        email,
        password,
      });

      const { token, user } = response.data;

      localStorage.setItem('@TeamGleyce:token', token);
      localStorage.setItem('@TeamGleyce:user', JSON.stringify(user));

      api.defaults.headers.authorization = `Bearer ${token}`;

      toast.success('Seja bem-vindo!');

      setData({ token, user });
    } catch (error) {
      toast.error('Ocorreu um erro no fazer login, cheque as credenciais!');
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@TeamGleyce:token');
    localStorage.removeItem('@TeamGleyce:token');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
