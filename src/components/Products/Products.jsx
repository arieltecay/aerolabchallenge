import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { apiUrl } from "../../api/api";
import './products.css'
import Card from "../Card/Card";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
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
        <div className="container">
          {products.map((prod, id) => {
            return (
              <div >
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
      )}
    </div>
  );
};

export default Products;
