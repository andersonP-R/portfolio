import styled from "styled-components";
import { Colors } from "./GlobalStyles";

export const AboutContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 600px;
  background-color: ${Colors["black-color"]};
  margin-bottom: 120px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  height: 100%;
  margin: 0px auto;
  border-right: 2px solid #eeeef84d;

  padding-top: 60px;
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 50%;
  height: 650px;
  z-index: 10;
  margin-bottom: 50px;
`;

export const TableCont = styled.div`
  position: absolute;
  width: 500px;
  height: 600px;
  right: 60px;
  opacity: 0.06;
`;

export const Description = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-right: 26px;
  text-align: right;

  .title-container {
    display: flex;
    justify-content: end;

    .t-1,
    .t-2 {
      font-weight: bolder;
      text-transform: uppercase;
      color: ${Colors["white-color"]}f2;
      font-size: 140px;
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
`;
