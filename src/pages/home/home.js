import Header from "../../components/header/header";
import Posts from "../../components/posts/posts";
import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <main>
      <section>
        <Header />
        <Posts />
        <Footer />
      </section>
    </main>
  );
};

export default Home;
