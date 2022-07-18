import { Link } from "react-router-dom";
import "./info.scss";
import icon from "../../assets/img/icon.png";
import facebook from "../../assets/img/facebook.svg";
import github from "../../assets/img/github.svg";
import twitter from "../../assets/img/twitter.svg";
import inSocials from "../../assets/img/in.svg";

const Info = () => {
  return (
    <div className="info">
      <h2 className="info__heading">What I do!</h2>
      <p className="info__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum
        augue erat ac eros. Cras ultricies mattis convallis.
      </p>

      <Link className="info__link" to="/">
        EXPLORE ME <img className="info__link__img" src={icon} alt="" />{" "}
      </Link>

      <div className="info__socials">
        <a href="https://m.facebook.com/">
          <img src={facebook} alt="facebook img" />
        </a>
        <a href="https://github.com/JumaboyevJasurbek?tab=repositories">
          <img src={github} alt="github img" />
        </a>
        <a href="/">
          <img src={twitter} alt="twitter img" />
        </a>
        <a href="/">
          <img src={inSocials} alt="IN img" />
        </a>
      </div>
    </div>
  );
};

export default Info;
