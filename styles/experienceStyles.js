import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-color: #1d1e22;
  margin-bottom: 120px;
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
  }
`;

export const WorksCont = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;

  .work-card {
    height: auto;
    margin: 20px;
    background: rgba(255, 255, 255, 0.12);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.6px);
    -webkit-backdrop-filter: blur(4.6px);
    border: 1px solid rgba(255, 255, 255, 0.33);
    overflow: hidden;
    transition: 0.3s ease-out;

    .work-card__img-container {
      position: relative;
      width: 100%;
      height: 300px;
      opacity: 0.5;
      transition: 0.3s ease-in-out;
    }

    .work-card__work-info {
      display: flex;
      flex-direction: column;
      padding: 10px;
      gap: 5px;
      transition: 300ms ease-in-out;

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

    &:hover {
      transform: scale(1.15);
      z-index: 10;

      .work-card__img-container {
        opacity: 1;
      }

      .work-card__work-info {
        transform: scale(0.9);
      }
    }
  }
`;
