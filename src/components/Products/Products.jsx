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
  //Get Currents Pacients
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);
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
          <div className="container-cabecera">
            <div className="pagination">
              <div className="numeros-indice">
                {indexOfLast} of {products.length} Products
              </div>
              <div>
                <div className="filtrar-por">
                  <div className="sort-by">Sort By:</div>
                  <div className="order-price" onClick={()=>console.log("Lowest Price")}>Lowest Price</div>
                  <div className="order-price">Highest Price</div>
                </div>
              </div>
              <Pagination
                postsPerPage={productsPerPage}
                totalPosts={products.length}
                paginate={paginate}
                className="pagination-button"
              />
            </div>
          </div>
          <div className="container">
            {currentProducts.map((prod, id) => {
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
