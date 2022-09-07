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
    overflow: hidden;

    .description {
      display: flex;
      flex-direction: column;
      width: 70%;
      gap: 6px;
      z-index: 10;

      h1 {
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

      h3 {
        color: ${Colors["gray-color"]};
        font-size: 40px;
        margin-bottom: 15px;

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
        line-height: 28px;
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

    .img-container {
      position: absolute;
      width: 800px;
      height: 570px;
      right: -100px;

      @media screen and (max-width: 960px) {
        width: 650px;
        height: 470px;
        right: -150px;
      }

      @media screen and (max-width: 750px) {
        left: 250px;
      }

      @media screen and (max-width: 600px) {
        left: 160px;
      }

      @media screen and (max-width: 500px) {
        width: 550px;
        height: 370px;
        left: 50px;
        opacity: 0;
      }
    }

    .box-1 {
      position: absolute;
      width: 600px;
      height: 450px;
      right: 0;
      border: 1px solid ${Colors["black-gray-color"]};
      transition: border-color 300ms ease-in-out;

      &:hover {
        border-color: ${Colors["white-color"]};
      }

      @media screen and (max-width: 960px) {
        width: 800px;
        height: 330px;
        pointer-events: none;
      }

      @media screen and (max-width: 750px) {
        display: none;
      }
    }
  }
`;
