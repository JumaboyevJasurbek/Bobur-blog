import { createContext, useEffect, useState } from "react";
import { Types } from "../consts";
import { getRndInteger } from "../utils";
import "./posts.scss";
export const PostsContext = createContext();

const PostsProvider = (props) => {
  const [posts, setPosts] = useState();

  const [filteredPosts, setFilteredPosts] = useState();

  const [paginationPosts, setPaginationPosts] = useState();

  const [activePageNumber, setActivePageNumber] = useState(1);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        const PostsArray = data.map((post) => {
          return {
            ...post,
            likes: getRndInteger(0, 100),

            date: new Date(
              `${getRndInteger(2001, 2023)}-${getRndInteger(
                1,
                12
              )}-${getRndInteger(1, 28)}`
            ).toDateString(),

            type: Types[getRndInteger(0, 5)],
          };
        });

        setPosts(PostsArray);
        setFilteredPosts(PostsArray);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (filteredPosts) {
      setPaginationPosts(
        filteredPosts.slice((activePageNumber - 1) * 10, activePageNumber * 10)
      );
    }
  }, [filteredPosts, activePageNumber]);

  if (loading) {
    return <span className="loader"></span>;
  }

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
        filteredPosts,
        setFilteredPosts,
        paginationPosts,
        setPaginationPosts,
        activePageNumber,
        setActivePageNumber,
      }}
      {...props}
    />
  );
};

export default PostsProvider;
