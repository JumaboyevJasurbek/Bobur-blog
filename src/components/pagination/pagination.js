import { useContext } from "react";
import { PostsContext } from "../../contexts/posts";
import "./pagination.scss";
import paginationLeft from "../../assets/img/pagination-left.png";
import paginationRight from "../../assets/img/pagination-right.png";
const Pagination = () => {
  const { filteredPosts, setActivePageNumber } = useContext(PostsContext);

  if (!filteredPosts) {
    return null;
  }

  const pagesCounts = Math.ceil(filteredPosts.length / 10);

  const hanlePaginationClick = (evt) => {
    if (evt.target.matches("button")) {
      setActivePageNumber(evt.target.dataset.id);
    }
  };

  return (
    <div className="container">
      <ol className="pagination-list" onClick={hanlePaginationClick}>
        <li>
          <button className="arrow-button">
            <img src={paginationLeft} alt="" />
          </button>
        </li>
        {Array(pagesCounts)
          .fill()
          .map((_, index) => (
            <li key={index} className="pagination-item">
              <button className="pagination-button" data-id={index + 1}>
                {index + 1}
              </button>
            </li>
          ))}
        <li>
          <button className="arrow-button">
            <img src={paginationRight} alt="" />
          </button>
        </li>
      </ol>
    </div>
  );
};

export default Pagination;
