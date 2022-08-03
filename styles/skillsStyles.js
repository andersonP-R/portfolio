import styled from "styled-components";
import { Colors } from "./GlobalStyles";

export const SkillsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-color: #1d1e22;
  margin-bottom: 120px;
`;

export const SkillsWrapper = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;

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
