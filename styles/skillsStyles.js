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
  padding-top: 20px;
  margin-bottom: 100px;

  @media screen and (max-width: 750px) {
    padding-top: 60px;
    margin-bottom: 0px;
  }

  .title {
    margin-top: 90px;
    position: absolute;
    width: 300px;
    height: 500px;
    border: 1px solid ${Colors["red-color"]};
    color: ${Colors["white-color"]}f2;
    font-size: 160px;
    text-transform: uppercase;

    @media screen and (max-width: 1000px) {
      font-size: 140px;
    }

    @media screen and (max-width: 680px) {
      font-size: 120px;
    }

    @media screen and (max-width: 580px) {
      width: 210px;
      font-size: 55px;
      padding-left: 10px;
    }
  }

  .skill-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-top: 300px;
    z-index: 10;

    @media screen and (max-width: 1000px) {
      margin-top: 260px;
    }

    @media screen and (max-width: 580px) {
      margin-top: 180px;
    }

    .skill-card {
      width: 155px;
      height: auto;
      margin: 18px 18px;
      z-index: 10;

      @media screen and (max-width: 580px) {
        width: 140px;
      }

      @media screen and (max-width: 400px) {
        width: 20%;
        margin: 20px 30px;
      }

      .skill-card__img-container {
        position: relative;
        width: 100%;
        height: 155px;

        @media screen and (max-width: 580px) {
          height: 120px;
        }

        @media screen and (max-width: 400px) {
          height: 70px;
        }
      }

      .skill-card__title {
        padding-top: 10px;
        text-align: center;
        font-size: 20px;
        color: ${Colors["gray-color"]};

        @media screen and (max-width: 580px) {
          font-size: 16px;
        }
      }
    }
  }
`;
