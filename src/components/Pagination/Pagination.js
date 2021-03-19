import "./pagination.css";
import imgLeft from "../../assets/icons/arrow-left.svg";
import imgRight from "../../assets/icons/arrow-right.svg";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination pagination-button">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              <div className="flechas">
                {number === 1 ? (
                  <img src={imgLeft} alt="not available" />
                ) : (
                  <img src={imgRight} alt="not available" />
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
