import styled from "styled-components";

export const UlCards = styled.ul`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  gap: 8px;
  background-color: #151515;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-around;
    overflow: hidden;
  }
`;

export const LiCard = styled.li`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 330px;
  gap: 0.5rem;
  background-color: #575755;
  margin-top: 30px;
  border: 1px solid #575755;
  border-radius: 8px;
  margin-bottom: 10px;

  img {
    border-radius: 8px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    gap: 10px;
    margin-bottom: 5px;
  }

  h3 {
    color: #fff;
    font-size: 16px;
  }

  span {
  }
`;

export const DivTechs = styled.div`
  display: flex;

  img {
    width: 130px;
    height: 50px;
  }

  button {
    width: 50%;
    max-width: 130px;
    padding: 5px;
    border-radius: 8px;
    border: none;
    background-color: #1a65b9;
  }

  a{
    color: #fff;
  }

  a:hover {
    color: #142e85;
  }
`;
