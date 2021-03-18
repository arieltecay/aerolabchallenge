import { Link } from "react-router-dom";
import "./navBar.css";
const NavBar = () => {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="contenedor">
            <Link to="/home">Inicio</Link>
            <Link to="/users">Usuarios</Link>
            <Link to="/products">Productos</Link>
            <Link to="/users">Puntos</Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
