import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

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

    button{
        background-color: #1a65b9;
        color: #fff;
        padding: 5px;
        font-size: 12px;
        border: none;
        border-radius: 10px;
    }

    button:hover{
        color:#142e85;
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
