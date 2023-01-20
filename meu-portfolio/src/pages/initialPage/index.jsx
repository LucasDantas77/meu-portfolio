import { Link } from "react-router-dom";
import { Welcome } from "../../components/sectionInitial";
import { Container, DivWelcome } from "./style";

export const InitialPage = () => {
  return (
    <Container>
      <Welcome/>
      <DivWelcome>
        <h1>Bem-vindo ao meu portfólio.</h1>
        <h2>Clique em Iniciar !</h2>
        <Link to={"/home"}>
          <button>Iniciar</button>
        </Link>
      </DivWelcome>
    </Container>
  );
};
