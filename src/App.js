import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";
import Home from "./components/Home/Home";
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
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products" exact component={Products} />
        {/* <Route path="/users" exact component={Users} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
