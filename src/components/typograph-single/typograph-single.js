import clock from "../../assets/img/clock.png";

const TypographSingle = ({ type }) => {
  return (
    <article className="post">
      <div className="container">
        <div className="post__left">
          <div className="post__time">
            <time className="post__data">{type.date}</time>
            <div className="post__data">{type.type}</div>
          </div>
          <h3 className="post__title">
            <div className="post__link">{type.title}</div>
          </h3>
          <p className="post__read">
            <img src={clock} alt="" /> {type.likes} minutes read
          </p>
        </div>
      </div>
    </article>
  );
};

export default TypographSingle;
