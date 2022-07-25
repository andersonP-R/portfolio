import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 600px;
  background-color: #1d1e22;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0px auto;
  border: 2px solid #eeeef8;
  display: flex;
  align-items: center;
  padding-top: 50px;
`;

export const Description = styled.div`
  width: 70%;
  color: #eeeef8cc;
  border: 1px solid #565668;
  position: relative;
  padding: 15px 50px;
  left: -30px;
  /* z-index: 999; */

  h1 {
    font-size: 20px;
    font-weight: lighter;
    letter-spacing: 1px;
  }

  h2 {
    font-size: 80px;
  }

  h3 {
    font-size: 40px;
    margin-bottom: 20px;
  }

  p {
    display: block;
    width: 420px;
    font-size: 20px;
    margin-bottom: 50px;
    /* background-color: red; */
  }

  a {
    position: absolute;
    text-decoration: none;
    border: 3px solid #0062ae;
    color: #9ea8ab;
    padding: 17px;
    bottom: -15px;
    border-radius: 5px;
    z-index: 10;
    transition: 0.2s ease;
  }

  a:hover {
    border: 3px solid #eeeef8;
    background-color: #0062aeb3;
    color: #eeeef8;
  }
`;

export const ImgContainer = styled.div`
  position: absolute;
  right: 35px;
  width: 50%;
  height: 450px;
  object-fit: cover;
  border: 4px solid #9ea8ab;
  opacity: 0.5;
`;
