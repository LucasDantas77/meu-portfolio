import TechLogos from "../../assets/tec-logos.png";
import GitSearch from "../../assets/gitsearch.png";
import { DivTechs, LiCard, UlCards } from "./style";

export const Projects = () => {
  return (
    <UlCards>
      <LiCard>
        <img src={GitSearch} alt="imagem GitSearch" />
        <div>
          <h3>Projeto: Git Search</h3>
          <p>
            Esse projeto tem como objetivo de encontrar perfis e repositorios de
            usuarios do git hub
          </p>
          <DivTechs>
            <img src={TechLogos} alt="html, css, js logo" />
            <button><a href="https://lucasdantas77.github.io/gitSearchBase-LucasDantas77/">Acessar projeto</a></button>
          </DivTechs>
        </div>
      </LiCard>
    </UlCards>
  );
};
