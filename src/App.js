import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Products from "./components/Products/Products";
import Users from "./components/Users/Users";
import headerX1 from "./assets/header-x1.png";

function App() {
  return (
    <BrowserRouter>
      <Users />
      <div>
        <img src={headerX1} width="100%" alt="" />
        <h1 className="img-principal">Electronics</h1>
      </div>
      <Switch>
        <Route path="/" exact component={Products} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
