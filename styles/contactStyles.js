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

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 40%;

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

        &:last-child {
          width: 80px;
          margin: 0px auto;
        }
      }
    }
  }

  .plane-container {
    position: relative;
    width: 350px;
    height: 350px;
    margin-top: 150px;
  }
`;
