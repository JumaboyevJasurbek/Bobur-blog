import { useContext } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import UxSingle from "../../components/ux-single/ux-single";
import { PostsContext } from "../../contexts/posts";

const UxPages = () => {
  const { filteredPosts } = useContext(PostsContext);

  return (
    <>
      <Header />
      {filteredPosts?.map((type) => (
        <UxSingle type={type} key={type.id} />
      ))}
      <Footer />
    </>
  );
};

export default UxPages;
