import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Providers/Auth";
import { RegisterContainer } from "./styles";
import { Redirect, useHistory } from "react-router";
import { FiShoppingBag } from "react-icons/fi";

interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPass: string;
}

const Register = () => {
  const { authToken, Register } = useAuth();

  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Digite seu nome"),
    email: yup
      .string()
      .email("Digite um email válido")
      .required("Digite seu email"),
    password: yup.string().required("Digite uma senha"),
    confirmPass: yup
      .string()
      .required("Digite a senha novamente")
      .oneOf(
        [yup.ref("password"), null],
        "A senha deve ser a mesma da anterior"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: RegisterData) => {
    Register(data);
  };

  if (authToken) {
    return <Redirect to="/dashboard"></Redirect>;
  }

  return (
    <RegisterContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div id="registerHeader">
          <h1>Cadastro</h1>
          <button type="button" onClick={() => history.push("/")}>
            Retornar para o login
          </button>
        </div>
        <div className="commonInputDiv">
          <input
            type="text"
            required={errors.name ? true : false}
            {...register("name")}
            placeholder="Nome"
          />
          <label>{errors.name?.message}</label>
        </div>
        <div className="commonInputDiv">
          <input
            type="email"
            required={errors.email ? true : false}
            {...register("email")}
            placeholder="Email"
          />
          <label>{errors.email?.message}</label>
        </div>
        <div className="commonInputDiv">
          <input
            type="password"
            required={errors.password ? true : false}
            {...register("password")}
            placeholder="Senha"
          />
          <label>{errors.password?.message}</label>
        </div>
        <div className="commonInputDiv">
          <input
            type="password"
            required={errors.confirmPass ? true : false}
            {...register("confirmPass")}
            placeholder="Confirmar senha"
          />
          <label>{errors.confirmPass?.message}</label>
        </div>
        <button id="registerButton" type="submit">
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
    </RegisterContainer>
  );
};

export default Register;
