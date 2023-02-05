import { NavLink } from "react-router-dom";
import  styled  from "styled-components";


export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: black;
  
  &:hover {
    color: tomato;
  }
  &.active{
    color: magenta;
  }
`;