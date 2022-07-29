import styled from "styled-components";

export const SkillsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  padding: 10px;

  background-color: #1d1e22;
`;

export const SkillsWrapper = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;

  h1 {
    padding-top: 50px;
    position: absolute;
    width: 300px;
    height: 500px;
    border: 1px solid red;
    color: #9ea8ab;
    font-size: 200px;
    text-transform: uppercase;
  }
`;

export const SkillBox = styled.div`
  /* display: grid;
  grid-template-columns: repeat(3, 1fr); */
  display: flex;
  width: 100%;
  margin: 10px;
  margin-top: 260px;

  .skill-card {
    flex: 1;
    width: 100%;
    margin: 10px;

    .skill-card__img-container {
      position: relative;
      width: 100%;
      height: 300px;
    }

    .skill-skill-info {
      display: flex;
      flex-direction: column;
      padding: 10px;
      gap: 5px;

      .skill-card__title {
        font-size: 25px;
        color: #b04873;
      }
    }
  }
`;
