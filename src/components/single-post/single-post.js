import "./single-post.scss";
import { Link, useParams } from "react-router-dom";
import clock from "../../assets/img/clock.png";
import Like from "../../assets/img/like.png";
import Share from "../../assets/img/share.png";
import SingleImg from "../../assets/img/single-main-img.png";
import { useContext, useRef } from "react";
import { PostsContext } from "../../contexts/posts";
const SinglePost = ({ post }) => {
  const { postId } = useParams();

  const { posts, setPosts } = useContext(PostsContext);

  const currentPost = posts?.find((post) => post.id === +postId);
  const titleRef = useRef();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const editingItemIndex = posts.findIndex(
      (post) => post.id === currentPost.id
    );
    const newPosts = [
      ...posts.slice(0, editingItemIndex),
      {
        ...currentPost,
        title: titleRef.current.value,
      },
      ...posts.slice(editingItemIndex + 1),
    ];

    setPosts(newPosts);
  };

  return (
    <article className=" post post1">
      <div className="single__left">
        <div className="single__like">
          <img src={Like} alt="" />
          <p className="single__like__text">125</p>
        </div>
        <div className="single__share">
          <img src={Share} alt="" />
          <p className="single__share__text">70</p>
        </div>
      </div>

      <div className="post1__right">
        <h3 className="post1__heading">User interface</h3>
        <h3 className="post1__title post__title">
          <Link className="post__link" to={`/post/${post.id}`}>
            {post.title}
          </Link>
        </h3>

        <form className="single__edit__form" onSubmit={handleFormSubmit}>
          {/* <input
            className="single__edit__input"
            ref={titleRef}
            defaultValue={currentPost.title}
            type="text"
          /> */}
          <input
            ref={titleRef}
            defaultValue={currentPost.title}
            className="single__edit__input"
            id="edit"
            type="text"
            placeholder="BO$$"
          />
          <label className="single__edit__label" htmlFor="edit">
            Edit
          </label>
          <button id="foot">
            <button className="button-os">
              <p className="single__edit__text">Submit</p>
            </button>
          </button>
        </form>

        {/* <div className="post__time"></div> */}
        <div className=" post1__read post__read ">
          <time className="post1__data post__data">{post.date}</time>
          <img src={clock} alt="" /> {post.likes} minutes read
        </div>
        <img className="post1__main-img" src={SingleImg} alt="" />

        <p>{post.body}</p>
      </div>
      {/* <div className="post__data">{post.type}</div> */}
    </article>
  );
};

export default SinglePost;
