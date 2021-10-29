import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Providers/Auth";
import { RegisterContainer } from "./styles";

interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPass: string;
}

const Register = () => {
  const { Register } = useAuth();

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

  return (
    <RegisterContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Cadastro</h1>
        <div>
          <input type="text" {...register("name")} placeholder="Seu nome" />
          <label>{errors.name?.message}</label>
        </div>
        <div>
          <input type="text" {...register("email")} placeholder="Seu email" />
          <label>{errors.email?.message}</label>
        </div>
        <div>
          <input
            type="password"
            {...register("password")}
            placeholder="Senha"
          />
          <label>{errors.password?.message}</label>
        </div>
        <div>
          <input
            type="password"
            {...register("confirmPass")}
            placeholder="Confirmar senha"
          />
          <label>{errors.confirmPass?.message}</label>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </RegisterContainer>
  );
};

export default Register;
