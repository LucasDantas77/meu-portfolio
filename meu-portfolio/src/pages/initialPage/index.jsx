import { Link } from "react-router-dom";
import { Container, DivContainer, DivDescription, DivWelcome } from "./style";
export const InitialPage = () => {
  return (
    <Container>
      <nav>
        <h2>Port<span>fólio</span></h2>
        <p>Seja bem vindo</p>
      </nav>
      <DivContainer>
        <DivDescription>
          <p>Ola, me chamo </p>
          <h1>Lucas Dantas</h1>
          <p>
            sou <span>Desenvolvedor Front End</span>
          </p>
        </DivDescription>
        <DivWelcome>
          <h2>Bem vindo ao meu portfólio !</h2>
          <p>Clique em íniciar</p>
          <Link to={"/home"}>
            <button>Iniciar</button>
          </Link>
        </DivWelcome>
      </DivContainer>
    </Container>
  );
};
