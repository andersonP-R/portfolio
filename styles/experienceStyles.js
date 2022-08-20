import styled from "styled-components";
import { Colors } from "./GlobalStyles";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-color: ${Colors["black-color"]};
  margin-bottom: 120px;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0px auto;
  border-left: 1px solid ${Colors["white-color"]};
  padding-top: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title-container {
    display: flex;
    height: 90px;

    .t-1 {
      display: flex;
      align-items: center;
      height: 120px;
      text-transform: uppercase;
      color: ${Colors["white-color"]}f2;
      font-size: 140px;
      font-weight: bolder;
      padding: 10px;
      border: 1px solid ${Colors["red-color"]};
    }

    .t-2 {
      display: flex;
      flex-direction: column;
      text-transform: uppercase;
      color: ${Colors["white-color"]}f2;
      font-size: 48px;
      font-weight: bolder;
      padding: 8px 5px;
    }

    .t-3 {
      text-transform: uppercase;
      color: ${Colors["white-color"]}f2;
      font-size: 178px;
      font-weight: bolder;
      line-height: 200px;
    }
  }
`;

export const WorksCont = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;

  .work-card {
    height: auto;
    margin: 20px;
    background: rgba(29, 30, 34, 0.27);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.1px);
    -webkit-backdrop-filter: blur(3.1px);
    border: 1px solid ${Colors["gray-color"]};
    overflow: hidden;
    transition: 0.3s ease-out;

    .work-card__img-container {
      position: relative;
      width: 100%;
      height: 250px;
      opacity: 0.5;
      transition: 0.3s ease-in-out;
    }

    .work-card__work-info {
      display: flex;
      flex-direction: column;
      padding: 10px;
      gap: 5px;
      transition: 300ms ease-in-out;

      .work-card__title {
        font-size: 25px;
        color: ${Colors["white-color"]};
      }

      .work-card__descrip {
        font-size: 16px;
        color: ${Colors["gray-color"]};
        margin-bottom: 8px;
      }

      .work-card__url {
        width: max-content;
        font-size: 16px;
        text-decoration: none;
        color: ${Colors["blue-color"]};

        svg {
          margin-left: 6px;
          font-size: 10px;
        }
      }
    }

    &:hover {
      border-color: ${Colors["blue-color"]};
      z-index: 10;

      .work-card__img-container {
        opacity: 1;
      }
    }
  }
`;
