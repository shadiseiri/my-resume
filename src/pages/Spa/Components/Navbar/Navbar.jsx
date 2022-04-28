import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";

const NavBar = ({ toggleHandler }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogo to="" onClick={toggleHome}>
            ShadiSeiri
          </NavLogo>
          <MobileIcon onClick={toggleHandler}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="" smooth={true} onClick={toggleHome} duration={500}>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="courses"
                smooth={true}
                duration={500}
                spy
                offset={-80}
              >
                Courses
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="blog" smooth={true} duration={500} spy offset={-80}>
                Blog
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="roadmap"
                smooth={true}
                duration={500}
                spy
                offset={-80}
              >
                Road Map
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="features"
                smooth={true}
                duration={500}
                spy
                offset={-80}
              >
                Features
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              to="signin"
              smooth={true}
              duration={500}
              spy
              offset={-80}
            >
              Sign in
            </NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
