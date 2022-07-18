import { Link } from "react-router-dom";
import logo from "../../assets/img/sayt-logo-desktop.svg";
import mobileLogo from "../../assets/img/sayt-logo-mobile.svg";
import "./logo.scss";
const Logo = () => {
  return (
    <Link to="/">
      <img className="logo" src={logo} alt="" />
      <div className="logo-mobile">
        <img className="" src={mobileLogo} alt="" />
      </div>
    </Link>
  );
};

export default Logo;
