import { useContext } from "react";
import DesignSingle from "../../components/design-single/design-single";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
// import { useParams } from "react-router-dom";
import { PostsContext } from "../../contexts/posts";

const DesignPages = () => {
  const { filteredPosts } = useContext(PostsContext);

  return (
    <>
      <Header />
      {filteredPosts?.map((type) => (
        <DesignSingle type={type} key={type.id} />
      ))}
      <Footer />
    </>
  );
};

export default DesignPages;
