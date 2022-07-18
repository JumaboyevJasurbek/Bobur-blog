import { useContext, useRef } from "react";
import SearchImg from "../../assets/img/search-desktop.png";
import { PostsContext } from "../../contexts/posts";
import "./search.scss";

const Search = () => {
  const inputRef = useRef();

  const { posts, setFilteredPosts } = useContext(PostsContext);

  // const [search, setSearch] = useState("");

  const handleFilterSubmit = (evt) => {
    evt.preventDefault();

    const inputValue = inputRef.current.value;

    const FiltredPosts = posts.filter((post) =>
      post.title.includes(inputValue)
    );
    // console.log(FiltredPosts);

    setFilteredPosts(FiltredPosts);
  };

  return (
    <form onSubmit={handleFilterSubmit} method="get" className="search__form">
      <input
        ref={inputRef}
        className="search__input"
        type="search"
        placeholder="Search"
      />
      <button className="search__button">
        <img src={SearchImg} alt="search img" />
      </button>
    </form>
  );
};

export default Search;
