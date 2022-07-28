import styled from "styled-components";

export const ContactContainer = styled.section`
  width: 100%;
  height: 85vh;
  padding: 10px;
  background-color: #1d1e22;
`;

export const ContactWrapper = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0px auto;
  border: 1px solid white;
  display: flex;
  justify-content: center;

  .buzon-container {
    position: absolute;
    width: 800px;
    height: 450px;
    left: 80px;
    margin-top: 80px;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 40%;
    margin-top: 40px;

    .contact-title {
      font-size: 50px;
      color: #9ea8ab;
    }

    .contact-decrip {
      font-size: 18px;
      color: #9ea8ab;
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      width: 50%;
      height: auto;
      gap: 20px;

      input {
        height: 45px;
        background-color: #1d1e22f2;
        outline: none;
        color: #eeeef8;
        padding: 10px;
        z-index: 10;
        font-size: 15px;

        &:last-child {
          cursor: pointer;
          width: 80px;
          margin: 0px auto;
          transition: 0.2s ease;
        }

        &:last-child:hover {
          background-color: #9ea8ab1a;
        }
      }

      textarea {
        min-width: 240px;
        max-width: 240px;
        min-height: 80px;
        max-height: 200px;
        background-color: #1d1e22e6;
        outline: none;
        color: white;
        padding: 10px;
        z-index: 10;
      }
    }
  }

  .plane-container {
    position: absolute;
    width: 450px;
    height: 450px;
    right: 40px;
    margin-top: 150px;
  }
`;
