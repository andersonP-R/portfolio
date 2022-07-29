import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-color: #1d1e22;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0px auto;
  border-left: 1px solid #eeeef8;
  padding-top: 100px;

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
      color: #9ea8ab;
      font-size: 140px;
      font-weight: bolder;
      border: 1px solid red;
    }

    .t-2 {
      display: flex;
      flex-direction: column;
      text-transform: uppercase;
      color: #9ea8ab;
      font-size: 48px;
      font-weight: bolder;
      padding: 8px 5px;
    }

    .t-3 {
      text-transform: uppercase;
      color: #9ea8ab;
      font-size: 200px;
      font-weight: bolder;
      line-height: 200px;
      text-shadow: 2px 2px 0px red;
    }

    /* .t-4 {
      height: 120px;
      text-transform: uppercase;
      color: #9ea8ab;
      font-size: 200px;
      font-weight: bolder;
      line-height: 200px;

      border: 1px solid red;
    } */
  }
`;

export const WorksCont = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  margin: 10px;

  .work-card {
    height: auto;
    margin: 30px;

    .work-card__img-container {
      position: relative;
      width: 100%;
      height: 300px;
    }

    .work-card__work-info {
      display: flex;
      flex-direction: column;
      padding: 10px;
      gap: 5px;

      .work-card__title {
        font-size: 25px;
        color: #b04873;
      }

      .work-card__descrip {
        font-size: 16px;
        color: #9ea8ab;
      }

      .work-card__url {
        text-decoration: none;
        color: #0060ad;
      }
    }
  }
`;
