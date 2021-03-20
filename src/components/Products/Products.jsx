import { useState, useContext, useEffect } from "react";
import { urlProducts, headers } from "../../api/api";
import { userContext } from "../../App";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import "./products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(16);
  const { setProductsList, productsList, category } = useContext(userContext);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await fetch(urlProducts, { method: "GET", headers });
      const data = await res.json();
      setProducts(data);
      setLoading(false);
      setProductsList(data);
    };
    fetchProducts();
  }, []);

  //Get Currents Pacients
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);
  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {loading ? (
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div>
          <div className="pagination">
            <div className="numeros-indice">
              {indexOfLast} of {products.length} Products
            </div>
            <Pagination
              postsPerPage={productsPerPage}
              totalPosts={products.length}
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
