import React from "react";
import { FaBars } from "react-icons/fa";
import { MobileIcon, Nav, NavContainer, NavItems, NavLogo, NavMenu , NavLink} from "./NavBarElements";

const NavBar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">Shadi Seiri</NavLogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItems>
            <NavLink to="/">Home</NavLink>
          </NavItems>
          <NavItems>
            <NavLink to="profile">Profile</NavLink>
          </NavItems>
          <NavItems>
            <NavLink to="portfolio">Portfolio</NavLink>
          </NavItems>
          <NavItems>
            <NavLink to="skill">Skill</NavLink>
          </NavItems>
          <NavItems>
            <NavLink to="contact">Contact</NavLink>
          </NavItems>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
