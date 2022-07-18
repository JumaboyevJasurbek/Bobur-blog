import { Link } from "react-router-dom";
import "./post.scss";
import clock from "../../assets/img/clock.png";
const Post = ({ post }) => {
  return (
    <article className="post">
      <div className="post__right">
        <div className="post__time">
          <time className="post__data">{post.date}</time>
          <div className="post__data">{post.type}</div>
        </div>
        <h3 className="post__title">
          <Link className="post__link" to={`/post/${post.id}`}>
            {post.title}
          </Link>
        </h3>
        <p className="post__read">
          <img src={clock} alt="" /> {post.likes} minutes read
        </p>
      </div>
    </article>
  );
};

export default Post;
