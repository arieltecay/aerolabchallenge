import { useState, useContext, useEffect } from "react";
import { urlProducts, headers } from "../../api/api";
import { userContext } from "../../App";
import Card from "../Card/Card";
import usePagination from "../Pagination/Pagination";
import "./products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortData, setSortData] = useState("recent");
  const { setProductsList } = useContext(userContext);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await fetch(urlProducts, { method: "GET", headers });
      const data = await res.json();
      setProducts(data);
      setLoading(false);
      setProductsList(data);
      renderSwitch();
    };
    fetchProducts();
  }, []);

  const renderSwitch = () => {
    switch (sortData) {
      case "lowPrice":
        return products
          .sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost))
          .map((data, id) => <Card key={id} data={data} />);
      case "highPrice":
        return products
          .sort((a, b) => parseFloat(b.cost) - parseFloat(a.cost))
          .map((data, id) => <Card key={id} data={data} />);
      default:
        return products
          .sort((a, b) => (a._id < b._id ? -1 : 1))
          .map((data, id) => <Card key={id} data={data} />);
    }
  };

  const { currentArray, next, prev, maxPage, currentPage } = usePagination(
    renderSwitch(),
    16
  );

  return (
    <div>
      {loading ? (
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div>
          <div className="pagination container-pagination">
            <div className="numeros-indice">{currentPage} of {maxPage} Pages</div>
            <div className="sort-by">
              <div className="">Sort By:</div>
              <div
                className="button-order-price"
                onClick={() => setSortData("lowPrice")}
              >
                Lowest Price
              </div>
              <div
                className="button-order-price"
                onClick={() => setSortData("highPrice")}
              >
                Highest Price
              </div>
            </div>
            <button
              className="btnPaginationLeft btn"
              onClick={() => prev()}
              disabled={currentPage <= 1}
            >
              Next
            </button>
            <button
              className="btnPaginationRight btn"
              onClick={() => next()}
              disabled={currentPage >= maxPage}
            >
              Prev
            </button>
          </div>

          <div className="container">
            {currentArray.map((prod, id) => {
              return (
                <div key={id}>
                  <Card
                    name={prod.props.data.name}
                    img={prod.props.data.img.hdUrl}
                    category={prod.props.data.category}
                    cost={prod.props.data.cost}
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
