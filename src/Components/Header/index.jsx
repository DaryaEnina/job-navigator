import logo from "../../assets/svg/logo.svg";
import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-right">
          <nav className="header__nav">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </nav>
          <div className="header__avatar"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
