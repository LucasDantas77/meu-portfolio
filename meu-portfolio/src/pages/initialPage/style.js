import styled, { keyframes } from "styled-components";

const Typing = keyframes`
100%{
left:100%;
margin:0 -35px 0 35px
}
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to top, #575755, #000, #212724);
  display: flex;
  align-items: center;
  flex-direction: column;

  nav {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 30px 0;
    align-items: center;
    background-color: #151515;

    nav:hover {
      background-color: #1a65b9;
    }

    p {
      color: #fff;
    }

    h2 {
      color: #fff;
    }

    span {
      color: #1a65b9;
      font-size: 18px;
    }
  }
`;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  margin-top: 100px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    width: 80%;
  }
`;

export const DivDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;

  h1 {
    color: #fff;
  }
  p {
    font-size: 18px;
    color: #fff;
  }

  span {
    position: relative;
    color: #1a65b9;
  }

  span:after {
    content: "";
    animation: ${Typing} 2s steps(10) infinite;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    background: #000;
    border-left: 2px solid #1a65b9;
  }
`;

export const DivWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  background-color: #151515;
  height: 200px;
  padding: 10px;
  border-bottom: 1px solid transparent;
  border-radius: 10px;

  h2 {
    width: 100%;
    font-size: 20px;
    color: #fff;
  }

  h2:hover {
    color: #1a65b9;
  }

  p {
    color: #fff;
  }

  p:hover {
    color: #1a65b9;
  }

  button {
    width: 130px;
    border-radius: 8px;
    border: none;
    background-color: #1a65b9;
    padding: 8px;
    color: #fff;
  }

  button:hover {
    color: #142e85;
  }
`;
