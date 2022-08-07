import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";

import { HamburguerButton } from "./hamburguerButton";
import { Colors } from "../styles/GlobalStyles";

export const NavBar2 = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <NavContainer>
      <div className="nav-logo">
        <a href="/">
          <Image src="/images/log-letters.png" layout="fill" />
        </a>
      </div>

      <div className="burguer-button">
        <HamburguerButton open={open} handleOpen={handleOpen} />
      </div>

      <ul className={`nav-items ${open ? "active" : ""}`}>
        <li className="item">
          <a onClick={handleOpen} href="#hero">
            Home
          </a>
        </li>
        <li className="item">
          <a onClick={handleOpen} href="#about">
            About
          </a>
        </li>
        <li className="item">
          <a onClick={handleOpen} href="#experience">
            Experience
          </a>
        </li>
        <li className="item">
          <a onClick={handleOpen} href="#skills">
            Skills
          </a>
        </li>
        <li className="item">
          <a onClick={handleOpen} href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <BgDiv className={`initial ${open ? " active" : ""}`} />
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  width: 100%;
  height: 80px;
  position: fixed;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;

  .nav-logo {
    position: relative;
    width: 200px;
    height: 80px;
    a {
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
    }
  }

  .nav-items {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    top: 0;
    left: -100%;
    padding: 25px;
    list-style: none;
    background-color: ${Colors["black-color"]};
    transition: all 0.3s ease;

    .item {
      font-size: 100px;
      width: 100%;

      a {
        text-decoration: none;
        color: ${Colors["white-color"]}cc;
        transition: 0.4s ease;

        &:hover {
          padding-left: 20px;
          color: ${Colors["white-color"]};
        }
      }
    }
  }

  .nav-items.active {
    left: 0;
  }

  .burguer-button {
    background-color: ${Colors["black-color"]}cc;
    border-radius: 50%;
    overflow: hidden;
    z-index: 999;
  }
`;

const BgDiv = styled.div`
  background-color: ${Colors["white-color"]}99;
  position: absolute;
  left: -100%;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  transition: all 0.2s ease;

  &.active {
    left: 0;
  }
`;
