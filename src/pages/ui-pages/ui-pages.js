import { useContext } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import UiSingle from "../../components/ux-single/ux-single";
import { PostsContext } from "../../contexts/posts";

const UiPages = () => {
  const { filteredPosts } = useContext(PostsContext);

  return (
    <>
      <Header />
      {filteredPosts?.map((type) => (
        <UiSingle type={type} key={type.id} />
      ))}
      <Footer />
    </>
  );
};

export default UiPages;
