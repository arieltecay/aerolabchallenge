import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import HistoryContainer from "../components/History/HistoryContainer";
import ImageHeader from "../components/imageHeader/ImageHeader";
import "./history.css";
const History = () => {
  return (
    <div>
      <div className="container-header">
        <Link to="/" className="boton-header">
          {" "}
          Home
        </Link>
        <Header />
      </div>
      <div>
        <ImageHeader />
      </div>
      <div>
        <HistoryContainer />
      </div>
    </div>
  );
};

export default History;
