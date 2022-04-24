import React, { useEffect, useState } from "react";
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

const NavBar = () => {
  const colorArray = ["#4d7ec1", "#4850a1", "#473b91", "#442784", "#37075d"];
  const [scrollNav, setScrollNav] = useState(false)

  const changeNaveHandler = () => {
    if(window.scrollY >= 710){
      setScrollNav(true)
    }else{
      setScrollNav(false)
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll" , changeNaveHandler)
  },[])


const toggleHomeHandler = () => {
  scroll.scrollToTop()
}



  return (
    <Nav scrollNav={scrollNav}>
      <NavContainer>
        <NavLogo to="/" onClick={toggleHomeHandler} smooth duration={500}>Shadi Seiri</NavLogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItems color={colorArray[0]}>
            <NavLink to="/" onClick={toggleHomeHandler} smooth duration={500} >Home</NavLink>
          </NavItems>
          <NavItems color={colorArray[1]}>
            <NavLink to="profile" smooth duration={500} spy >Profile</NavLink>
          </NavItems>
          <NavItems color={colorArray[2]}>
            <NavLink to="portfolio" smooth duration={500}>Portfolio</NavLink>
          </NavItems>
          <NavItems color={colorArray[3]}>
            <NavLink to="skill" smooth duration={500}>Skill</NavLink>
          </NavItems>
          <NavItems color={colorArray[4]}>
            <NavLink to="contact" smooth duration={500}>Contact</NavLink>
          </NavItems>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
