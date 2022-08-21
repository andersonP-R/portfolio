import styled from "styled-components";
import { Colors } from "./GlobalStyles";

export const ContactWrapper = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: 0px auto;
  border: 1px solid ${Colors["white-color"]};
  display: flex;
  justify-content: center;
  padding-top: 80px;
  margin-bottom: 30px;

  .buzon-container {
    position: relative;
    width: 510px;
    height: 500px;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
    gap: 20px;
    width: 40%;

    .contact-title {
      color: ${Colors["white-color"]}f2;
      text-transform: capitalize;
      font-size: 50px;
    }

    .contact-decrip {
      color: ${Colors["gray-color"]};

      text-align: center;
      font-size: 16px;
      line-height: 24px;
    }

    a {
      text-decoration: none;
      border: 1px solid ${Colors["gray-color"]};
      padding: 15px;
      font-size: 18px;
      color: ${Colors["gray-color"]};
      border-radius: 5px;
      margin-top: 20px;
      transition: 0.3s ease;

      &:hover {
        background: ${Colors["gray-color"]}1a;
      }
    }
  }

  .plane-container {
    position: relative;
    width: 450px;
    height: 450px;
    margin-top: 50px;
  }
`;
