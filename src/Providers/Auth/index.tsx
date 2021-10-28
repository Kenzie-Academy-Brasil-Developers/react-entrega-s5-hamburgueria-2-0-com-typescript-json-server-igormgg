import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
// import { useHistory } from "react-router-dom";

interface AuthProviderData {
  authToken: string;
  Signout: () => void;
  Signin: (userData: UserData) => void;
}

interface AuthProps {
  children: ReactNode;
}

interface UserData {
  email: string;
  password: string;
  name: string;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProps) => {
  //   const history = useHistory();

  const [authToken, setAuthToken] = useState(
    () => localStorage.getItem("token") || ""
  );

  const Signin = (userData: UserData) => {
    axios
      .post("https://hamburgueria-kenzie-2-igor.herokuapp.com/register")
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setAuthToken(response.data.token);
        // history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  const Signout = () => {
    localStorage.clear();
    setAuthToken("");
    // history.push("/");
  };

  return (
    <AuthContext.Provider value={{ authToken, Signout, Signin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
