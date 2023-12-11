import { Link } from "react-router-dom/cjs/react-router-dom";
import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.slidebar.background};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  width: 50%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
  }
`;

export const NavigationMenuList = styled.ul`
  width: 100%;
`;

export const NavigationMenuItems = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  list-style: none;
`;

export const StyledNavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: ${({ theme }) => theme.links.text};
  text-decoration: none;
  transition: color 0.3s linear;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 1.2rem;
    text-align: center;
  }
  &:hover {
    color: ${({ theme }) => theme.hover.text};
  }
`;
