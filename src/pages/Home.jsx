import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import ImageHeader from "../components/imageHeader/ImageHeader";
import Products from "../components/Products/Products";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="container-header">
        <Link to="/history" className="boton-header">
          History
        </Link>
        <Header />
      </div>
      <div>
        <ImageHeader />
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
};

export default Home;
