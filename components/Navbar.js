import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import {
  Container,
  Logo,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
  Wrapper,
} from "../styles/NavbarStyles";

import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [bgNav, setBgNav] = useState(false);

  return (
    <Container bgNav={bgNav}>
      <Wrapper>
        <Logo>
          <Link href="/">
            <a>
              <Image src="/images/logo-variant-gray3.png" layout="fill" />
            </a>
          </Link>
        </Logo>

        <MobileIcon
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          open={showMobileMenu}
        >
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <Menu open={showMobileMenu}>
          <MenuItem>
            <MenuItemLink
              href="#about"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <div>About</div>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink
              href="#experience"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <div>Experience</div>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink
              href="#skills"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <div>Skills</div>
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink
              href="#contact"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <div>Contact</div>
            </MenuItemLink>
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
};
