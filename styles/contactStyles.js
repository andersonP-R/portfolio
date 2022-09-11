import styled from "styled-components";
import { Colors } from "./GlobalStyles";

export const ContactWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  height: 100vh;
  margin: 0px auto;
  margin-bottom: 30px;

  .main-container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 80px;
    overflow: hidden;

    border: 1px solid ${Colors["white-color"]};

    .buzon-container {
      position: absolute;
      width: 500px;
      height: 550px;
      left: 0px;

      /* MEDIA QUERY */
      @media screen and (max-width: 1050px) {
        left: -140px;
      }

      @media screen and (max-width: 750px) {
        width: 600px;
        height: 650px;
        left: -240px;
        opacity: 0.5;
      }

      @media screen and (max-width: 600px) {
        height: 650px;
        left: -250px;
        opacity: 0.2;
      }
    }

    .form-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 60px;
      gap: 20px;
      width: 50%;

      /* MEDIA QUERY */
      @media screen and (max-width: 600px) {
        width: 100%;
      }

      .contact-title {
        color: ${Colors["white-color"]}f2;
        text-transform: capitalize;
        font-size: 50px;
        text-align: center;

        /* MEDIA QUERY */
        @media screen and (max-width: 750px) {
          font-size: 38px;
        }
      }

      .contact-decrip {
        width: 70%;
        text-align: center;
        font-size: 16px;
        line-height: 24px;
        color: ${Colors["gray-color"]};
      }

      a {
        text-decoration: none;
        border: 1px solid ${Colors["gray-color"]};
        padding: 15px;
        font-size: 16px;
        color: ${Colors["gray-color"]};
        border-radius: 5px;
        margin-top: 20px;
        transition: 0.3s ease;
        z-index: 10;

        &:hover {
          background: ${Colors["gray-color"]}1a;
        }
      }
    }

    .plane-container {
      position: absolute;
      width: 410px;
      height: 430px;
      right: 0px;
      margin-top: 50px;

      /* MEDIA QUERY */
      @media screen and (max-width: 1050px) {
        right: -140px;
      }

      @media screen and (max-width: 750px) {
        width: 230px;
        height: 250px;
        top: 200px;
        right: -20px;
        opacity: 0.5;
      }

      @media screen and (max-width: 600px) {
        width: 130px;
        height: 150px;
        top: 450px;
        right: -20px;
        opacity: 1;
      }
    }

    /* MEDIA QUERY */
    @media screen and (max-width: 750px) {
      margin-bottom: 0px;
      border: none;
      height: 750px;
    }
  }
`;
