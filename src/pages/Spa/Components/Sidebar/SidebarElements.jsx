import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s ease;
  opacity: ${({isOpen})=>(isOpen? '100%' : '0')};
  top: ${({isOpen})=>(isOpen? '0' : '-100%')}
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  outline: none;
  cursor: pointer;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  text-align: center;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #fab209;
    transition: 0.2s ease-in-out;
  }
`;


export const SideBtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SidebarRoute = styled(LinkR)`
border-radius: 50px;
background: #fab209;
color: #010606;
cursor: pointer;
transition: 0.2s ease-in-out;
white-space: nowrap;
padding: 16px 64px;
outline: none;
font-size: 1rem;
text-decoration: none;



&:hover{
    background: #fff;
    transition: 0.2s ease-in-out;
}



`;
