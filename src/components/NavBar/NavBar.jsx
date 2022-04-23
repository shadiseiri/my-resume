import React from "react";
import { FaBars } from "react-icons/fa";
import {
  MobileIcon,
  Nav,
  NavContainer,
  NavItems,
  NavLogo,
  NavMenu,
  NavLink,
} from "./NavBarElements";

const NavBar = () => {
  const colorArray = ["#4d7ec1", "#4850a1", "#473b91", "#442784", "#421979"];

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">Shadi Seiri</NavLogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItems color={colorArray[0]}>
            <NavLink to="/">Home</NavLink>
          </NavItems>
          <NavItems color={colorArray[1]}>
            <NavLink to="profile">Profile</NavLink>
          </NavItems>
          <NavItems color={colorArray[2]}>
            <NavLink to="portfolio">Portfolio</NavLink>
          </NavItems>
          <NavItems color={colorArray[3]}>
            <NavLink to="skill">Skill</NavLink>
          </NavItems>
          <NavItems color={colorArray[4]}>
            <NavLink to="contact">Contact</NavLink>
          </NavItems>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
