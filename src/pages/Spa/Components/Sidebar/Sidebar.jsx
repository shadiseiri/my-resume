import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrapper,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({toggleHandler, isOpen}) => {
  return (
    <SidebarContainer isOpen={isOpen} >
      <Icon onClick={toggleHandler} >
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggleHandler} to="/">Home</SidebarLink>
          <SidebarLink onClick={toggleHandler} to="courses">Courses</SidebarLink>
          <SidebarLink onClick={toggleHandler} to="blog">Blog</SidebarLink>
          <SidebarLink onClick={toggleHandler} to="roadmap">Road Map</SidebarLink>
          <SideBtnWrapper>
            <SidebarRoute to="/signin">Sign in</SidebarRoute>
          </SideBtnWrapper>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
