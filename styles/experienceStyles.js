import styled from "styled-components";
import { Colors } from "./GlobalStyles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0px auto;
  border-left: 1px solid ${Colors["white-color"]}4d;
  padding-top: 60px;
  margin-bottom: 100px;

  /* MEDIA QUERY */
  @media screen and (max-width: 750px) {
    margin-bottom: 0px;
    border-left: none;
  }

  @media screen and (max-width: 500px) {
    padding-top: 50px;
  }

  .swipe {
    display: none;
    width: 100%;
    height: 30px;
    margin-top: 18px;

    p {
      font-size: 20px;
      color: #fff;
    }

    svg {
      color: #fff;
      font-size: 1.3rem;
      margin-top: 0.2rem;
    }

    @media screen and (max-width: 810px) {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
  }

  .title-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    margin-bottom: 30px;

    /* MEDIA QUERY */
    @media screen and (max-width: 1115px) {
      height: 150px;
    }

    @media screen and (max-width: 810px) {
      height: 90px;
    }

    @media screen and (max-width: 500px) {
      margin-bottom: 0px;
      height: auto;
    }

    .t-1 {
      display: flex;
      align-items: center;
      width: max-content;
      height: 120px;
      text-transform: uppercase;
      color: ${Colors["white-color"]}f2;
      font-size: 140px;
      font-weight: bolder;
      padding: 10px;
      border: 1px solid ${Colors["red-color"]};

      /* MEDIA QUERY */
      @media screen and (max-width: 1290px) {
        font-size: 120px;
      }

      @media screen and (max-width: 1115px) {
        font-size: 80px;
      }

      @media screen and (max-width: 810px) {
        font-size: 50px;
        height: 80px;
      }

      @media screen and (max-width: 500px) {
        padding: 5px;
        font-size: 38px;
        height: 40px;
      }
    }

    .t-2 {
      display: flex;
      flex-direction: column;
      text-transform: uppercase;
      color: ${Colors["white-color"]}f2;
      font-size: 48px;
      font-weight: bolder;
      padding: 8px 5px;

      /* MEDIA QUERY */
      @media screen and (max-width: 1290px) {
        font-size: 28px;
      }

      @media screen and (max-width: 810px) {
        font-size: 20px;
      }

      @media screen and (max-width: 500px) {
        font-size: 16px;
        line-height: 16px;
      }
    }

    .t-3 {
      text-transform: uppercase;
      color: ${Colors["white-color"]}f2;
      font-size: 160px;
      font-weight: bolder;

      /* MEDIA QUERY */
      @media screen and (max-width: 1290px) {
        font-size: 140px;
      }

      @media screen and (max-width: 1115px) {
        font-size: 80px;
      }

      @media screen and (max-width: 810px) {
        font-size: 50px;
      }

      @media screen and (max-width: 500px) {
        font-size: 38px;
      }
    }
  }

  .works-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: auto;

    /* MEDIA QUERY */
    @media screen and (max-width: 810px) {
      max-width: 100%;
      height: 500px;
      flex-direction: column;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
    }

    .work-card {
      width: 450px;
      height: 500px;
      margin: 20px;
      border-radius: 16px;
      border: 1px solid ${Colors["white-color"]};
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
      overflow: hidden;
      transition: 0.3s ease-out;

      /* MEDIA QUERY */
      @media screen and (max-width: 810px) {
        scroll-snap-align: center;
      }

      @media screen and (max-width: 500px) {
        width: 90%;
        height: 410px;
      }

      .work-card__img-container {
        position: relative;
        width: 100%;
        height: 250px;
        opacity: 0.5;
        transition: 0.3s ease-in-out;

        /* MEDIA QUERY */
        @media screen and (max-width: 810px) {
          height: 140px;
          opacity: 1;
        }
      }

      .work-card__work-info {
        display: flex;
        flex-direction: column;
        padding: 15px;
        gap: 15px;
        transition: 300ms ease-in-out;

        /* MEDIA QUERY */
        @media screen and (max-width: 810px) {
          gap: 12px;
        }

        .work-card__title {
          font-size: 25px;
          text-transform: capitalize;
          color: ${Colors["white-color"]};
          transition: color 0.3s ease-out;

          /* MEDIA QUERY */
          @media screen and (max-width: 810px) {
            font-size: 22px;
          }
        }

        .work-card__descrip {
          font-size: 16px;
          line-height: 20px;
          color: ${Colors["gray-color"]};
          margin-bottom: 8px;
        }

        .work-card__technologies {
          font-size: 16px;
          color: ${Colors["white-color"]}4d;
          text-transform: capitalize;
          margin-bottom: 8px;
        }

        .work-card__url {
          width: max-content;
          font-size: 16px;
          text-decoration: none;
          color: ${Colors["white-color"]};
          transition: color 0.3s ease-out;

          &:hover {
            text-decoration: underline;
          }

          svg {
            margin-left: 6px;
            font-size: 10px;
          }
        }
      }

      &:hover {
        .work-card__img-container {
          opacity: 1;
        }

        .work-card__url {
          color: ${Colors["blue-color"]};
        }

        .work-card__title {
          color: ${Colors["blue-color"]};
        }
      }
    }
  }
`;
