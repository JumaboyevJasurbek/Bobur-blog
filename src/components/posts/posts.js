import { useContext } from "react";
import { PostsContext } from "../../contexts/posts";
import Info from "../info/info";
import Pagination from "../pagination/pagination";
import Post from "../post/post";
import "./posts.scss";
const Posts = () => {
  const { paginationPosts } = useContext(PostsContext);
  // console.log(posts);
  return (
    <div className="container posts">
      <div className="posts-left">
        <Info />
      </div>
      <div className="posts-right">
        <h2 className="posts__heading">Recent Posts</h2>

        {paginationPosts?.map((post) => (
          <Post post={post} key={post.id} />
        ))}
        <Pagination />
      </div>
    </div>
  );
};

export default Posts;
