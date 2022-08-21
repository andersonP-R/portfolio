import styled from "styled-components";
import { Colors } from "./GlobalStyles";

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
  height: auto;
  margin: 0px auto;
  margin-bottom: 100px;

  h1 {
    margin-top: 90px;
    position: absolute;
    width: 300px;
    height: 500px;
    border: 1px solid ${Colors["red-color"]};
    color: ${Colors["white-color"]}f2;
    font-size: 200px;
    text-transform: uppercase;
  }
`;

export const SkillBox = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  width: 100%;
  margin: 10px;
  margin-top: 340px;
  z-index: 10;

  .skill-card {
    margin: 0px 15px;

    .skill-card__img-container {
      position: relative;
      width: 100%;
      height: 160px;
    }

    .skill-card__title {
      padding-top: 10px;
      text-align: center;
      font-size: 20px;
      color: ${Colors["gray-color"]};
    }
  }
`;
