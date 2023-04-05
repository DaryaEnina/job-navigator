import arrow from "../../assets/svg/Arrow_navbar.svg";
import "./style.scss";

const Navbar = () => {
  return (
    <aside className="navbar">
      <nav className="navbar__wrapper">
        <ul className="navbar__list">
          <li></li>
          <li></li>
        </ul>
      </nav>
      <div className="navbar__arrow">
        <img src={arrow} alt="" />
      </div>
    </aside>
  );
};

export default Navbar;
