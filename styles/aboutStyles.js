import styled from "styled-components";
import { Colors } from "./GlobalStyles";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  min-height: 100vh;
  height: auto;
  margin: 0px auto;
  border-right: 2px solid #eeeef84d;
  padding-top: 20px;
  margin-bottom: 100px;
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 50%;
  height: 650px;
  margin-bottom: 50px;
`;

export const TableCont = styled.div`
  position: absolute;
  width: 500px;
  height: 600px;
  opacity: 0.06;
  top: -200px;
`;

export const Description = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-right: 26px;
  text-align: right;

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
