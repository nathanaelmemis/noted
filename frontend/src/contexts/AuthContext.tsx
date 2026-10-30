import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { apiClient } from "../lib/apiClient";

type LoginType = {
  email: string;
  password: string;
  remember_me?: boolean | undefined;
};

interface ProviderProps {
  user: string | null,
  token: string,
  login(data: LoginType): void,
  logout(): void,
}

const AuthContext = createContext<ProviderProps>({
  user: null,
  token: '',
  login: () => { },
  logout: () => { }
});

const AuthProvider = ({ children }: { children: React.ReactNode; }) => {
  const storedInfo = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}') : null;
  const [user, setUser] = useState<string | null>(storedInfo?.email);
  const [token, setToken] = useState(storedInfo?.token || '');
  const naigate = useNavigate();

  const login = (data: LoginType) => {
    apiClient.post<{ accessToken: string; }>('/api/auth/login', {
      email: data.email,
      password: data.password
    }).then(response => {
      setUser(data.email);
      setToken(response.data.accessToken);
      naigate('/note');
    });
  };

  const logout = () => {
    setUser(null);
    setToken('');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};