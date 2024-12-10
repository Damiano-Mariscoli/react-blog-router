import { Link, NavLink } from "react-router-dom";

function MainNav() {
  return (
    <nav>
      <Link to="/">Home Page</Link>
      <Link to="/chi-siamo">Chi siamo</Link>
      <NavLink className={"confirm"} to="/languages">
        Linguaggi
      </NavLink>
    </nav>
  );
}
export default MainNav;
