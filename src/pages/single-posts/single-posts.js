import { useContext } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/header";
import { PostsContext } from "../../contexts/posts";
import "./single-post.scss";
// import Like from "../../assets/img/like.png";
// import Share from "../../assets/img/share.png";
import SinglePost from "../../components/single-post/single-post";
import Footer from "../../components/footer/footer";

const SinglePosts = () => {
  const { postId } = useParams();
  const { posts } = useContext(PostsContext);

  const currentPost = posts?.find((post) => post.id === +postId);

  // const titleRef = useRef();

  if (!currentPost) {
    return <h1>There is nothing</h1>;
  }

  return (
    <>
      <Header />

      <main className="container">
        <SinglePost post={currentPost} />
      </main>

      <Footer />
    </>
  );
};

export default SinglePosts;
