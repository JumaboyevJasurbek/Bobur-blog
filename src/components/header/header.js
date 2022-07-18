// import { Types } from "../../consts";
import Logo from "../logo/logo";
import NavBar from "../nav-bar/nav-bar";
import Search from "../search/search";
import "./header.scss";
const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="header-left ">
          <Logo />
          <NavBar />
        </div>
        <Search />
      </div>
    </div>
  );
};

export default Header;
