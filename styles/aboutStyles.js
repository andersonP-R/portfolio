import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 600px;
  background-color: #eeeef8;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0px auto;
  border-left: 2px solid #1d1e22;
  border-right: 2px solid #1d1e22;
  border-bottom: 2px solid #1d1e22;
  padding-top: 140px;
  overflow: hidden;

  display: flex;
  align-items: center;
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 50%;
  height: 650px;
`;

export const FaceCont = styled.div`
  position: absolute;
  width: 45%;
  height: 580px;
  left: -250px;
  top: 720px;

  @media screen and (max-width: 1550px) {
    top: 620px;
  }

  @media screen and (max-width: 1400px) {
    top: 550px;
  }
`;

export const TableCont = styled.div`
  position: absolute;
  width: 40%;
  height: 500px;
  right: 0px;
  opacity: 0.5;
`;

export const Description = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 100px;

  h1 {
    font-size: 80px;
  }

  .p-1 {
    width: 100%;
    font-size: 30px;
  }
  .p-2 {
    width: 100%;
    font-size: 30px;
    color: #0060ad;
  }
`;
