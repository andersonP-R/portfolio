import styled from "styled-components";

export const Colors = {
  "red-color": "#910001",
  "blue-color": "#0061af",
  "white-color": "#eeeef8",
  "gray-color": "#9ea8ab",
  "black-color": "#1d1e22",
  "black-gray-color": "#565668",
};

export const MainContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  height: auto;
  padding: 0px 100px;
  background-color: ${Colors["black-color"]};
  overflow: hidden;

  @media screen and (max-width: 960px) {
    padding: 0px 80px;
  }

  @media screen and (max-width: 750px) {
    padding: 0px 40px;
  }

  @media screen and (max-width: 500px) {
    padding: 0px 25px;
  }
`;
