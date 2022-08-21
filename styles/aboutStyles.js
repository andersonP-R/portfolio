import styled from "styled-components";
import { Colors } from "./GlobalStyles";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  height: 100vh;
  margin: 0px auto;
  border-right: 2px solid #eeeef84d;
  margin-bottom: 120px;

  @media screen and (max-width: 750px) {
    border-right: none;
    margin-bottom: 0px;
  }

  .img-desc-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .img-container {
      position: relative;
      width: 600px;
      height: 650px;

      @media screen and (max-width: 1000px) {
        height: 500px;
      }

      @media screen and (max-width: 750px) {
        position: absolute;
        left: -120px;
        width: 650px;
        height: 650px;
        opacity: 0.3;
      }
    }

    .description {
      position: relative;
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding-right: 26px;
      text-align: right;

      @media screen and (max-width: 750px) {
        padding-right: 0px;
        width: 70%;
      }

      .title-container {
        display: flex;
        justify-content: end;
        box-sizing: border-box;

        .t-1,
        .t-2 {
          font-weight: bolder;
          text-transform: uppercase;
          color: ${Colors["white-color"]}f2;
          font-size: 140px;

          @media screen and (max-width: 1000px) {
            font-size: 100px;
          }

          @media screen and (max-width: 750px) {
            font-size: 80px;
          }

          @media screen and (max-width: 500px) {
            font-size: 55px;
          }
        }

        .t-2 {
          border: 1px solid ${Colors["red-color"]};
          padding: 0px 10px;
        }
      }

      .p-1,
      .p-2 {
        color: ${Colors["gray-color"]};
        width: 100%;
        font-size: 18px;
        line-height: 24px;
      }
      .p-2 {
        color: ${Colors["blue-color"]};
      }

      .table-container {
        position: absolute;
        width: 500px;
        height: 600px;
        top: -200px;
        opacity: 0.06;

        @media screen and (max-width: 1000px) {
          width: 500px;
          height: 600px;
          top: -200px;
          left: -80px;
        }

        @media screen and (max-width: 750px) {
          display: none;
        }
      }

      @media screen and (max-width: 750px) {
        position: absolute;
        right: 0px;
      }
    }
  }
`;
