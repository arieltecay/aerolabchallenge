import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { apiUrl } from "../../api/api";
import "./products.css";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(16);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = useCallback(async (dispatch) => {
    try {
      const result = await axios.get(`${apiUrl}/products`);
      setProducts(result.data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  });
  console.log("Productos", products.length);

  //Get Currents Pacients
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentPaciente = products.slice(indexOfFirst, indexOfLast);
  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      {loading ? (
        <div>
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="pagination">
            <Pagination
              postsPerPage={productsPerPage}
              totalPosts={products.length}
              paginate={paginate}
              className="pagination-button"
            />
          </div>
          <div className="container">
            {currentPaciente.map((prod, id) => {
              return (
                <div>
                  <Card
                    name={prod.name}
                    img={prod.img.hdUrl}
                    category={prod.category}
                    cost={prod.cost}
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

export default Products;
