import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 600px;
  background-color: #1d1e22;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0px auto;
  border-right: 2px solid #eeeef84d;
  border-bottom: 2px dashed #eeeef8;

  display: flex;
  align-items: center;
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
  padding-right: 50px;
  margin-bottom: 100px;
  text-align: right;
  padding-top: 180px;

  .title-container {
    display: flex;
    justify-content: end;

    .t-1,
    .t-2 {
      font-weight: bolder;
      text-transform: uppercase;
      color: #eeeef8cc;
      font-size: 140px;
    }

    .t-2 {
      /* height: 100px; */
      /* margin-left: 18px; */
      border: 1px solid red;
      padding: 0px 10px;
    }
  }

  .p-1 {
    color: #9ea8ab;
    width: 100%;
    font-size: 30px;
  }
  .p-2 {
    width: 100%;
    font-size: 30px;
    color: #0060ad;
  }
`;
