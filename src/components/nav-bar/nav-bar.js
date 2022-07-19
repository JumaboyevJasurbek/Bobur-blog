import { Link } from "react-router-dom";
import "./nav-bar.scss";
import hamburger from "../../assets/img/hamburger.svg";
import exit from "../../assets/img/exit.svg";
import { useContext, useState } from "react";
import { PostsContext } from "../../contexts/posts";

const NavBar = () => {
  // const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const { posts, setFilteredPosts } = useContext(PostsContext);

  const handleDesignLabelClick = (evt) => {
    evt.preventDefault();

    const FiltredDesign = posts.filter((post) => post.type === "Design Theory");

    console.log(FiltredDesign);

    setFilteredPosts(FiltredDesign);
  };

  const handleUxLabelClick = (evt) => {
    evt.preventDefault();

    const FiltredDesign = posts.filter((post) => post.type === "UX");

    console.log(FiltredDesign);

    setFilteredPosts(FiltredDesign);
  };

  const handleUiLabelClick = (evt) => {
    evt.preventDefault();

    const FiltredDesign = posts.filter((post) => post.type === "UI");

    console.log(FiltredDesign);

    setFilteredPosts(FiltredDesign);
  };

  const handleTypographLabelClick = (evt) => {
    evt.preventDefault();

    const FiltredDesign = posts.filter((post) => post.type === "Typography");

    console.log(FiltredDesign);

    setFilteredPosts(FiltredDesign);
  };

  return (
    <>
      <div className={click ? "nav-1 nav-active" : "nav"}>
        <form className="nav__list">
          <div className="nav__item">
            <Link to="/" className="nav__link nav__link--active">
              All
            </Link>
          </div>
          <label
            onClick={handleDesignLabelClick}
            typeof="radio"
            className="nav__item"
          >
            <Link to="/design" className="nav__link">
              Design Theory
            </Link>
          </label>
          <label
            onClick={handleUxLabelClick}
            typeof="radio"
            className="nav__item"
          >
            <Link to="/ux" className="nav__link">
              UX
            </Link>
          </label>
          <label
            onClick={handleUiLabelClick}
            typeof="radio"
            className="nav__item"
          >
            <Link to="/ui" className="nav__link">
              UI
            </Link>
          </label>
          <label
            onClick={handleTypographLabelClick}
            typeof="radio"
            className="nav__item"
          >
            <Link to="/typography" className="nav__link">
              Typography
            </Link>
          </label>
        </form>
      </div>
      <div className="nav__hamburger" onClick={handleClick}>
        {click ? <img src={exit} alt="" /> : <img src={hamburger} alt="" />}
      </div>
    </>
  );
};

export default NavBar;
