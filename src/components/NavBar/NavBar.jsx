import React, { useRef, useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import {
  MobileIcon,
  Nav,
  NavContainer,
  NavLink,
  NavLogo,
  NavMenu,
  NavContent,
} from "./NavBarElements";

const NavBar = ({ toTop, setToTop, toggleHandler }) => {
  const colorArray = ["#4d7ec1", "#4857a4", "#454094", "#422b83", "#3e086a", "#55267cb"];
  const [scrollY, setScrollY] = useState(null);
  const navRef = useRef();

  // fix navbar to the top of windpw when reaches there
  const fixNavBar = () => {
    const navOffsetTop = navRef.current.offsetTop;
    if (navOffsetTop <= 0) {
      setToTop(true);
    }
  };

  // move navbar from down of window to top when the window is scrolling
  const changeNavPositionHandler = () => {
    if (window.scrollY > 0) {
      setScrollY(window.scrollY);
    }
  };

  // the moment window is scrolling change navbar position
  const changeNavHandler = () => {
    if (window.scrollY > 0) {
      changeNavPositionHandler();
      fixNavBar();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavHandler);
  }, []);

  const toggleHomeHandler = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav scrollY={scrollY} ref={navRef} toTop={toTop}>
      <NavContainer>
        <NavLogo to="/" onClick={toggleHomeHandler} smooth duration={500}>
          Shadi Seiri
        </NavLogo>
        <MobileIcon onClick={toggleHandler}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavLink
            color={colorArray[0]}
            to="/"
            onClick={toggleHomeHandler}
            smooth
            duration={3000}
          >
            <NavContent>Home</NavContent>
          </NavLink>
          <NavLink color={colorArray[1]} to="about me" smooth duration={1000} spy>
            <NavContent>About Me</NavContent>
          </NavLink>
          {/* <NavLink color={colorArray[2]} to="resume" smooth duration={1000} spy>
            <NavContent>Resume</NavContent>
          </NavLink> */}

          <NavLink
            to="portfolio"
            smooth
            duration={1000}
            spy
            color={colorArray[2]}
          >
            <NavContent>Portfolio</NavContent>
          </NavLink>

          <NavLink color={colorArray[3]} to="skills" smooth duration={1000} spy>
            <NavContent>Skills</NavContent>
          </NavLink>

          <NavLink to="contact" smooth duration={1000} spy color={colorArray[4]}>
            <NavContent>Contact</NavContent>
          </NavLink>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
