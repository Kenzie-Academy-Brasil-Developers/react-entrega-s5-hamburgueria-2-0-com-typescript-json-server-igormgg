import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

interface AuthProviderData {
  authToken: string;
  Signout: () => void;
  Signin: (userData: UserData) => void;
  Register: (registerData: RegisterData) => void;
}

interface AuthProps {
  children: ReactNode;
}

interface UserData {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPass: string;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProps) => {
  const history = useHistory();

  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );

  const Register = (registerData: RegisterData) => {
    axios
      .post(
        "https://hamburgueria-kenzie-2-igor.herokuapp.com/register",
        registerData
      )
      .then((response) => {
        toast.success("Cadastro realizado!");
        history.push("/login");
      })
      .catch(() => toast.error("Ops, algo deu errado!"));
  };

  const Signin = (userData: UserData) => {
    axios
      .post("https://hamburgueria-kenzie-2-igor.herokuapp.com/login", userData)
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        setAuthToken(response.data.accessToken);
        history.push("/dashboard");
        toast.success(`Bem vindo ${response.data.user.name}!`);
      })
      .catch(() => toast.error("Ops, algo deu errado!"));
  };

  const Signout = () => {
    localStorage.clear();
    setAuthToken("");
    history.push("/");
  };

  return (
    <AuthContext.Provider value={{ authToken, Signout, Signin, Register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
