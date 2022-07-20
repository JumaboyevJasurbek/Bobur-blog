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
  // const { setPosts } = useContext(PostsContext);

  const handleClickAll = (evt) => {
    const typesName = evt.target.dataset.value;
    const filteredAll = posts?.filter((all) => all.types === typesName);
    setFilteredPosts(typesName === "All" ? posts : filteredAll);
  };

  const handleDesignLabelClick = (evt) => {
    const FiltredDesign = posts.filter((post) => post.type === "Design Theory");

    setFilteredPosts(FiltredDesign);
  };

  const handleUxLabelClick = () => {
    const FiltredUx = posts.filter((post) => post.type === "UX");

    setFilteredPosts(FiltredUx);
  };

  const handleUiLabelClick = () => {
    const FiltredUI = posts.filter((post) => post.type === "UI");

    setFilteredPosts(FiltredUI);
  };

  const handleTypographLabelClick = () => {
    const FiltredTypograph = posts.filter((post) => post.type === "Typography");

    setFilteredPosts(FiltredTypograph);
  };

  return (
    <>
      <div className={click ? "nav-1 nav-active" : "nav"}>
        <form className="nav__list">
          <label onClick={handleClickAll} typeof="radio" className="nav__item">
            <Link to="/" className="nav__link nav__link--active">
              All
            </Link>
          </label>
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
