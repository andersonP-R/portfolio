import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1d1e22;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0px auto;
  border-left: 1px solid #eeeef8;
  padding-top: 140px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #9ea8ab;
    font-size: 40px;
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
