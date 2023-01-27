import {
  Container,
  DivBtns,
  DivContainer,
  DivHeader,
  DivMainBtns,
} from "./style";
import Linkedin from "../../assets/logo-linkedin.png";
import GitHub from "../../assets/git-logo.png";
import Vercel from "../../assets/log-vercel.jpg";

export const MainPage = () => {
  return (
    <Container>
      <DivContainer>
        <DivHeader>
          <p>Habilidades</p>
        </DivHeader>
        <p>
          Tenho experiências sólidas em Html5, Css3, JavaScripit, typescript,
          framework como o React. Estou disposto a conhecer e aprender coisas
          novas, estarei sempre me esforçando para evoluir cada vez mais !
        </p>
        <DivMainBtns>
          <DivBtns>
            <img src={Linkedin} alt="logo Linkedin" />
            <button>
              <a href="https://www.linkedin.com/in/lucas-dantas-761a9723b">
                Acessar LinkedIn
              </a>
            </button>
          </DivBtns>
          <DivBtns>
            <img src={GitHub} alt="logo GitHub" />
            <button>
              <a href="https://github.com/LucasDantas77">Acessar GitHub</a>
            </button>
          </DivBtns>
          <DivBtns>
            <img src={Vercel} alt="logo vercel" />
            <button>
              <a href="https:vercel.com/lucasdantas77">Acessar Vercel</a>
            </button>
          </DivBtns>
        </DivMainBtns>
      </DivContainer>
    </Container>
  );
};
