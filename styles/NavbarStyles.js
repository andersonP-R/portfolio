import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #1d1e2299;
  position: fixed;
  z-index: 999;
  transition: 0.3s ease;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  padding: 0px 20px;
`;

export const Logo = styled.div`
  position: relative;
  width: 100px;
  /* height: 80px; */
  /* z-index: 999; */
  margin-left: 10px;
  a {
    width: 100%;
    height: 80px;

    position: absolute;
  }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;

  @media screen and (max-width: 960px) {
    background: #0e4a67f2;
    position: absolute;
    /* top: 80px; */
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    transition: 0.3s all ease;
  }
`;

export const MenuItem = styled.li`
  height: 100%;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  color: #eeeef8;
  font-size: 16px;
  text-decoration: none;
  transition: 0.6s all ease;
  border-bottom: 1px solid transparent;

  &:hover {
    border-color: red;
    transition: 0.2s all ease;
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    div {
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      font-size: 80px;
    }
  }

  @media screen and (max-width: 500px) {
    div {
      width: 100%;
      justify-content: left;
    }
  }

  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;
  margin-right: 1rem;
  z-index: 999;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      fill: white;
      margin-right: 0.5rem;
    }
  }
`;
