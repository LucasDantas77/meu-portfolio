import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 300px;
  border: 1px solid #baffeb;
  border-radius: 10px;
  padding: 10px;
  gap: 1rem;

  p {
    color: #fff;
    line-height: 20px;
    font-size: 14px;
  }
`;

export const DivHeader = styled.div`
  background-color:  #1a65b9;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 10px;
  position: relative;
  right: 1px;
  bottom: 2px;
  z-index: 5;
  width: 93%;

  h3 {
    color: #fff;
    font-size: 18px;
    font-weight: 100;
    width: 100%;
    line-height: 25px;
  }
`;

export const DivMainBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DivBtns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }

  button{
    width: 80%;
    border-radius: 8px;
    border: none;
    background-color:  #1a65b9;
  }

  a{
    color: #fff;
  }

  a:hover{
   color: #142e85
  }
`;
