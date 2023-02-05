import { Outlet } from "react-router-dom";
import { NavLinkStyled } from "./Layout.styled";

export const Layout = () => {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <NavLinkStyled to="/">Home</NavLinkStyled>
              </li>
              <li>
                <NavLinkStyled to="add">AddUser</NavLinkStyled>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Outlet/>
        </main>
      </>
    );
}