import { Link } from "react-router-dom";
import { MainPage } from "../../components/mainPage";
import { Projects } from "../../components/projects";
import { Container } from "./style";

export const HomePage = () => {
  return (
    <Container>
      <nav>
        <h2>
          Port<span>fólio</span>
        </h2>
        <Link to={"/"}>
          <button>Voltar</button>
        </Link>
      </nav>
      <MainPage />
      <Projects/>
    </Container>
  );
};
