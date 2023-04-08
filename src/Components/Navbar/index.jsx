import { NavLink } from "react-router-dom";
import "./style.scss";

const Navbar = () => {
  return (
    <aside className="navbar">
      <nav className="navbar__wrapper">
        <ul className="navbar__list">
          <li>
            <NavLink to="/">Aнкета</NavLink>
          </li>
          <li>
            <NavLink to="/analysis">Aнализ</NavLink>
          </li>
        </ul>
      </nav>
      <div className="navbar__arrow"></div>
    </aside>
  );
};

export default Navbar;
