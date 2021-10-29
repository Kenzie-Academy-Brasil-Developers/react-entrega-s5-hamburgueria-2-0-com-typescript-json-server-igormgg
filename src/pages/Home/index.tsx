import { useAuth } from "../../Providers/Auth";
import { LoginContainer } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

interface UserData {
  email: string;
  password: string;
}

const Home = () => {
  const { Signin } = useAuth();

  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("*Digite seu email"),
    password: yup.string().required("*Digite sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: UserData) => {
    Signin(data);
  };

  return (
    <LoginContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <div>
          <input type="text" {...register("email")} placeholder="Seu email" />
          <label>{errors.email?.message}</label>
        </div>
        <div>
          <input
            type="password"
            {...register("password")}
            placeholder="Sua senha"
          />
          <label>{errors.password?.message}</label>
        </div>
        <button type="submit">Logar</button>
        <span>
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </span>
        <button onClick={() => history.push("/register")}>Cadastrar</button>
      </form>
    </LoginContainer>
  );
};

export default Home;
