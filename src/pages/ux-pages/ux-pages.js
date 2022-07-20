import { useContext } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import NavSinglePost from "../../components/nav-single-post/nav-single-post";
import { PostsContext } from "../../contexts/posts";

const UxPages = () => {
  const { filteredPosts } = useContext(PostsContext);

  return (
    <>
      <Header />
      {filteredPosts?.map((type) => (
        <NavSinglePost type={type} key={type.id} />
      ))}
      <Footer />
    </>
  );
};

export default UxPages;
