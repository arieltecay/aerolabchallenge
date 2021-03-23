import { useState } from "react";
import Card from "../Card/Card";
import PaginationHistory from "../Pagination/PaginationHistory";

const HistoryComponent = ({ loading, history }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(16);

  //Get Currents Products
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = history.slice(indexOfFirst, indexOfLast);
  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {loading ? (
        <div>
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <div className="pagination" style={{cursor:"pointer"}}>
            <PaginationHistory
              postsPerPage={productsPerPage}
              totalPosts={history.length}
              paginate={paginate}
              className="pagination-button"
            />
          </div>
          <div className="container">
            {currentProducts.map((prod, id) => {
              return (
                <div key={id}>
                  <Card
                    name={prod.name}
                    img={prod.img.hdUrl}
                    category={prod.category}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryComponent;
