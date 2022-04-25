import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  position: fixed;
  /* position: ${({ toTop }) => (toTop ? "sticky" : "fixed")};; */
  z-index: 10;
  bottom: ${({ scrollY }) => (scrollY ? `${scrollY}px` : 0)};
  top: ${({ toTop }) => (toTop ? "0" : null)};
  right: 0;
  left: 0;
  background: linear-gradient(
    to right,
    transparent,
    #4d7ec1,
    #3e086a,
    transparent
  );
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  /* background: ${({ scrollNav }) =>
    scrollNav
      ? `linear-gradient(to right,transparent,#4d7ec1 , #3e086a,transparent )`
      : "transparent"}; */
  overflow: visible;

  @media screen and (max-width: 768px) {
    margin-top: -60px;
    position: sticky;
    top: 0;
    background: linear-gradient(to right, #4d7ec1, transparent, #3e086a);
    z-index: 10;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  height: 60px;
  justify-content: center;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
  overflow: visible;
`;

export const NavLogo = styled(LinkS)`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    color: #f7f8f9;
    justify-self: flex-start;
    font-size: 1.05rem;
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    color: #f7f8f9;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  overflow: visible;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItems = styled.li`


`;

export const NavLink = styled(LinkS)`
  background-color: ${({ color }) => color};
  height: 60px;
  overflow: visible;
  /* box-sizing: content-box; */

  &:hover {
    transform: scale(1.05);
  }

  &.active {
    /* border-bottom: 10px solid ${({ color }) => color}; */
    height: 70px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius:3px;
    
  }


`;

export const NavContent = styled.div`
  
  color: #f7f8f9;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  box-sizing: content-box;
  outline: none;



`