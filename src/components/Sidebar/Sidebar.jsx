import React from "react";
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper } from "./SidebarElements";

const Sidebar = ({toggleHandler, isOpen , homeToggleHandler}) => {
  return (
    <SidebarContainer isOpen={isOpen} >
      <Icon onClick={toggleHandler} >
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={homeToggleHandler} to="">Home</SidebarLink>
          <SidebarLink onClick={toggleHandler} to="about me">About Me</SidebarLink>
          <SidebarLink onClick={toggleHandler} to="portfolio">Portfolio</SidebarLink>
          <SidebarLink onClick={toggleHandler} to="skills">Skills</SidebarLink>
          <SidebarLink onClick={toggleHandler} to="contact">Contact</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
