import styled from "styled-components";
import { Colors } from "./GlobalStyles";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 600px;
  background-color: ${Colors["black-color"]};
  margin-bottom: 80px;
`;

export const HeroWrapper = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 50px;
`;

export const Description = styled.div`
  width: 70%;
  position: relative;
  padding: 15px 50px;
  left: -30px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 8px;

  h1 {
    color: ${Colors["blue-color"]};
    font-size: 20px;
    font-weight: lighter;
    letter-spacing: 1px;
    padding-top: 15px;
  }

  h2 {
    color: ${Colors["white-color"]}f2;
    font-size: 80px;
  }

  h3 {
    color: ${Colors["gray-color"]};
    font-size: 40px;
    margin-bottom: 20px;
  }

  p {
    color: ${Colors["gray-color"]};
    width: 65%;
    line-height: 24px;
    font-size: 18px;
    margin-bottom: 50px;
  }

  a {
    position: absolute;
    text-decoration: none;
    border: 2px solid ${Colors["blue-color"]};
    color: ${Colors["white-color"]};
    font-size: 16px;
    padding: 17px;
    bottom: -30px;
    border-radius: 5px;
    z-index: 10;
    transition: 0.2s ease;
  }

  a:hover {
    border-color: ${Colors["white-color"]};
    background-color: ${Colors["blue-color"]}b3;
    color: ${Colors["white-color"]};
  }
`;

export const ImgContainer = styled.div`
  position: absolute;
  right: 150px;
  width: 690px;
  height: 500px;
  border: 2px solid ${Colors["gray-color"]};
  opacity: 0.5;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 1550px) {
    right: 100px;
  }

  @media screen and (max-width: 1400px) {
    right: 60px;
  }
`;
