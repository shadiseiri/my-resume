import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  margin-top: -80px;
  background-color: #1d0553;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavContainer = styled.div`
  display: flex;
  height: 80px;
  justify-content: center;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
`;

export const NavLogo = styled(LinkR)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    color: #f7f8f9;
    justify-self: flex-start;
    font-size: 1rem;
    display: flex;
    align-items: center;
    margin-top: 24px;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
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

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItems = styled.li`
  height: 80px;
`;

export const NavLink = styled(LinkS)`
  color: #f7f8f9;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.7rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #9333ea;
  }
`;
