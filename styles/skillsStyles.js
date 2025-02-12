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
  margin-bottom: 200px;

  @media screen and (max-width: 750px) {
    padding-top: 60px;
    margin-bottom: 0px;
  }

  .title {
    margin-top: 90px;
    position: absolute;
    width: 150px;
    height: 140px;
    border: 1px solid ${Colors["red-color"]};
    color: ${Colors["white-color"]}f2;
    font-size: 120px;
    text-transform: uppercase;

    @media screen and (max-width: 1000px) {
      font-size: 140px;
    }

    @media screen and (max-width: 680px) {
      font-size: 120px;
    }

    @media screen and (max-width: 580px) {
      width: 210px;
      font-size: 42px;
      padding-left: 10px;
    }
  }

  .skill-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-top: 260px;
    z-index: 10;

    @media screen and (max-width: 1000px) {
      margin-top: 260px;
    }

    @media screen and (max-width: 580px) {
      margin-top: 180px;
    }

    .skill-card {
      width: 90px;
      height: auto;
      margin: 18px 18px;
      z-index: 10;

      @media screen and (max-width: 580px) {
        width: 100px;
      }

      @media screen and (max-width: 400px) {
        width: 60px;
        margin: 16px 12px;
      }

      .skill-card__img-container {
        position: relative;
        width: 100%;
        height: 80px;

        @media screen and (max-width: 580px) {
          height: 100px;
        }

        @media screen and (max-width: 400px) {
          height: 60px;
        }
      }

      .skill-card__title {
        padding-top: 10px;
        text-align: center;
        font-size: 20px;
        color: ${Colors["gray-color"]};

        @media screen and (max-width: 580px) {
          font-size: 14px;
        }
      }
    }
  }
`;
