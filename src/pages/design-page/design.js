import { useContext } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
// import { useParams } from "react-router-dom";
import { PostsContext } from "../../contexts/posts";
import NavSinglePost from "../../components/nav-single-post/nav-single-post";

const DesignPages = () => {
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

export default DesignPages;
