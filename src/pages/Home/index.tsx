import { useAuth } from "../../Providers/Auth";
import { LoginContainer } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { FiShoppingBag } from "react-icons/fi";
// import { useState } from "react";

interface UserData {
  email: string;
  password: string;
}

const Home = () => {
  // const [emailInputColor, setEmailInputColor] = useState("var(--gray-600)");

  const { Signin } = useAuth();

  const history = useHistory();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Digite um email válido")
      .required("Digite seu email"),
    password: yup.string().required("Digite sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: UserData) => {
    Signin(data);
  };

  // errors.email === undefined
  //   ? setEmailInputColor("var(--gray-600)")
  //   : setEmailInputColor("var(--fb-negative)");

  return (
    <LoginContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <div>
          <input
            id="emailInput"
            type="email"
            required={errors.email ? true : false}
            {...register("email")}
            placeholder="Email"
          />
          <label>{errors.email?.message}</label>
        </div>
        <div>
          <input
            type="password"
            required={errors.password ? true : false}
            {...register("password")}
            placeholder="Senha"
          />
          <label>{errors.password?.message}</label>
        </div>
        <button id="loginButton" type="submit">
          Logar
        </button>
        <span>
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </span>
        <button id="registerButton" onClick={() => history.push("/register")}>
          Cadastrar
        </button>
      </form>
      <div id="logoContainer">
        <img
          src="https://i.ibb.co/ct7G91Q/burguer-logo.png"
          alt="Burguer Logo"
        />
        <div id="logoDescriptionDiv">
          <div id="iconDiv">
            <FiShoppingBag />
          </div>
          <span>
            A vida é como um sanduíche, é preciso recheá-la com os{" "}
            <b>melhores</b> ingredientes.
          </span>
        </div>
        <div id="logoDots">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </LoginContainer>
  );
};

export default Home;
