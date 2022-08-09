import styled from "styled-components";
import { Colors } from "./GlobalStyles";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 600px;
  background-color: ${Colors["black-color"]};
`;

export const HeroWrapper = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0px auto;
  border-top: 1px solid ${Colors["white-color"]};
  border-left: 2px solid ${Colors["white-color"]}bf;
  border-right: 2px solid ${Colors["white-color"]}4d;
  display: flex;
  align-items: center;
  padding-top: 50px;
`;

export const Description = styled.div`
  width: 70%;
  border: 1px solid ${Colors["black-gray-color"]};
  position: relative;
  padding: 15px 50px;
  left: -30px;

  h1 {
    color: ${Colors["blue-color"]};
    font-size: 20px;
    font-weight: lighter;
    letter-spacing: 1px;
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
    border: 3px solid ${Colors["blue-color"]};
    color: ${Colors["white-color"]};
    font-size: 16px;
    padding: 17px;
    bottom: -15px;
    border-radius: 5px;
    z-index: 10;
    transition: 0.2s ease;
  }

  a:hover {
    border: 3px solid ${Colors["white-color"]};
    background-color: ${Colors["blue-color"]}b3;
    color: ${Colors["white-color"]};
  }
`;

export const ImgContainer = styled.div`
  position: absolute;
  right: 160px;
  width: 680px;
  height: 450px;
  border: 4px solid ${Colors["gray-color"]};
  opacity: 0.5;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 1550px) {
    right: 100px;
  }

  @media screen and (max-width: 1400px) {
    right: 35px;
  }
`;
