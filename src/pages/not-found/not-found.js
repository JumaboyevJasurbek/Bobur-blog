import "./not-found.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import Header from "../../components/header/header";
import "./not-found.scss";
import notFound from "../../assets/img/404-img.svg";

const NotFound = () => {
  const { token } = useContext(AuthContext);
  return (
    <div className="not-found">
      <Header />

      <div className="container not-found">
        <div className="not-found__img">
          <img src={notFound} alt="" />
        </div>
        <h2 className="not-found__heading">Page not found - 404</h2>

        <p className="not-found__text">
          This page not found (deleted or never exists).Try a phrase in search
          box or back to home and start again.
        </p>

        <h3 className="not-found__link">
          <Link className="not-found__link" to={"/" + (token ? "" : "login")}>
            {token ? "TAKE ME HOME!" : "TAKE ME LOGIN"}
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default NotFound;
