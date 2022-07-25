import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 600px;
  background-color: #eeeef8;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 40px;
  }

  div {
    display: flex;
    margin: 10px;
    div {
      width: 50px;
      height: 50px;
      border: 1px solid red;
    }
  }
`;
