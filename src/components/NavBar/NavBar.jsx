import React, { useRef, useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
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

const NavBar = ({ toTop, setToTop }) => {
  const colorArray = ["#4d7ec1", "#4850a1", "#473b91", "#442784", "#3e086a"];
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
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItems color={colorArray[0]}>
            <NavLink to="/" onClick={toggleHomeHandler} smooth duration={500}>
              Home
            </NavLink>
          </NavItems>
          <NavItems color={colorArray[1]}>
            <NavLink
              to="profile"
              smooth
              duration={500}
              spy
              color={colorArray[1]}
            >
              Profile
            </NavLink>
          </NavItems>
          <NavItems color={colorArray[2]}>
            <NavLink
              to="portfolio"
              smooth
              duration={500}
              spy
              color={colorArray[2]}
            >
              Portfolio
            </NavLink>
          </NavItems>
          <NavItems color={colorArray[3]}>
            <NavLink to="skill" smooth duration={500} spy color={colorArray[2]}>
              Skill
            </NavLink>
          </NavItems>
          <NavItems color={colorArray[4]}>
            <NavLink
              to="contact"
              smooth
              duration={500}
              spy
              color={colorArray[2]}
            >
              Contact
            </NavLink>
          </NavItems>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
