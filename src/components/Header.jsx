import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="d-flex align-items-center justify-content-between p-2">
      <Link
        to={"/"}
        className="d-flex align-items-center gap-1 text-decoration-none"
      >
        <img src="/c-logo.png" width={50} />
        <h3 className="text-light fs-2">Coinmania</h3>
      </Link>
      <nav className="d-flex align-items-center gap-3">
        <NavLink to={"/"} className="fs-5 text-decoration-none">
          Home
        </NavLink>
        <NavLink to={"/login"} className="fs-5 text-decoration-none">
          Login
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
