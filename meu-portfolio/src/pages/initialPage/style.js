import styled, { keyframes } from "styled-components";

const AnimatedDegrade = keyframes`
    0% {
      background-position-y: 0%;
    }
    100% {
      background-position-y: 100%;
    }
    `;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to top, #142e85, #1a65b9, #20abd8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  background-size: 500% 100%;
  animation: ${AnimatedDegrade} 5s infinite alternate;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const DivWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 80%;
  max-width: 350px;

  h1 {
    font-size: 20px;
    width: 100%;
    color: #fff;
    font-weight: 400;
  }

  h2 {
    color: #fff;
    font-size: 20px;
  }

  button {
    width: 100%;
    border-radius: 8px;
    border: none;
    background-color: #1a65b9;
    padding: 8px;
    color: #fff;
  }

  button:hover {
    color: #142e85;
  }

  @media (min-width: 768px) {
    h1 {
      margin-left: 90px;
    }
  }
`;
