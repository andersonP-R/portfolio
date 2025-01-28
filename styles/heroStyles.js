import styled from "styled-components";
import { Colors } from "./GlobalStyles";

export const HeroWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 600px;
  height: 100vh;
  margin: 0px auto;
  padding-top: 50px;
  margin-bottom: 120px;
  /* overflow: hidden; */

  @media screen and (max-width: 750px) {
    margin-bottom: 0px;
  }

  .desc-img-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    .description {
      display: flex;
      flex-direction: column;
      width: 70%;
      gap: 6px;
      z-index: 10;

      @media screen and (max-width: 750px) {
        background-color: ${Colors["black-color"]}cc;
      }

      h3 {
        color: ${Colors["blue-color"]};
        font-size: 20px;
        font-weight: lighter;
        letter-spacing: 1px;
        padding-top: 15px;

        @media screen and (max-width: 500px) {
          font-size: 18px;
        }
      }

      h2 {
        color: ${Colors["white-color"]}f2;
        font-size: 80px;

        @media screen and (max-width: 960px) {
          font-size: 70px;
          line-height: 75px;
        }

        @media screen and (max-width: 750px) {
          font-size: 60px;
        }

        @media screen and (max-width: 600px) {
          font-size: 50px;
          line-height: 60px;
        }

        @media screen and (max-width: 500px) {
          font-size: 40px;
          line-height: 45px;
        }
      }

      h1 {
        color: ${Colors["gray-color"]};
        font-size: 40px;

        @media screen and (max-width: 960px) {
          font-size: 38px;
        }

        @media screen and (max-width: 750px) {
          font-size: 30px;
        }

        @media screen and (max-width: 500px) {
          font-size: 27px;
          margin-bottom: 5px;
        }
      }

      p {
        color: ${Colors["gray-color"]};
        width: 65%;
        line-height: 34px;
        font-size: 20px;
        margin-bottom: 30px;

        @media screen and (max-width: 500px) {
          font-size: 16px;
          line-height: 22px;
          width: 90%;
        }
      }

      a {
        display: block;
        width: max-content;
        text-decoration: none;
        border: 2px solid ${Colors["blue-color"]};
        color: ${Colors["white-color"]};
        font-size: 16px;
        padding: 17px;
        border-radius: 5px;
        z-index: 10;
        transition: 0.2s ease;
      }

      a:hover {
        border-color: ${Colors["white-color"]};
        background-color: ${Colors["blue-color"]}b3;
        color: ${Colors["white-color"]};
      }
    }

    .animation {
      position: absolute;
      width: auto;
      height: auto;
      right: -180px;
      top: 80px;
      transform: rotate(160deg);

      @media screen and (max-width: 1250px) {
        opacity: 0.5;
        top: 60px;
        right: -200px;
      }

      @media screen and (max-width: 1000px) {
        top: 80px;
        right: -330px;
      }
    }
  }
`;
