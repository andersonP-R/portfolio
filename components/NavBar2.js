import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

import { HamburguerButton } from "./HamburguerButton";
import { Colors } from "../styles/GlobalStyles";
import { navbarVariants } from "../utils/animationVariants";

export const NavBar2 = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <NavContainer>
      <motion.div
        className="nav-logo"
        initial="hidden"
        animate="show"
        variants={navbarVariants}
        transition={{ delay: 0.3, duration: 0.2, type: "tween" }}
      >
        <Link href="/">
          <a className="log">
            <Image src="/images/icon-log.png" layout="fill" alt="logo" />
          </a>
        </Link>
      </motion.div>

      <motion.div
        className="burguer-button"
        initial="hidden"
        animate="show"
        variants={navbarVariants}
        transition={{ delay: 0.3, duration: 0.2, type: "tween" }}
      >
        <HamburguerButton open={open} handleOpen={handleOpen} />
      </motion.div>

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
  height: 100px;
  position: fixed;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 22px;

  .nav-logo {
    position: relative;
    width: 90px;
    height: 80px;
    transition: 0.2s ease;

    .log {
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
    justify-content: center;
    width: 100%;
    height: 100vh;
    top: 0;
    left: -100%;
    padding: 20px;
    list-style: none;
    background-color: ${Colors["black-color"]};
    transition: all 0.3s ease;

    .item {
      font-size: 100px;
      width: 100%;
      margin-bottom: 8px;

      a {
        text-decoration: none;
        color: ${Colors["white-color"]}cc;
        transition: 0.4s ease;

        &:hover {
          padding-left: 20px;
          color: ${Colors["white-color"]};
        }
      }

      @media screen and (max-width: 600px) {
        font-size: 80px;
        margin-bottom: 35px;
      }

      @media screen and (max-width: 500px) {
        font-size: 50px;
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

  @media screen and (max-width: 500px) {
    padding: 0px 10px 0px 8px;
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
