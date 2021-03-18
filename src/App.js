import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";

function App() {
  return (
    <BrowserRouter>
      <Users />
      <NavBar />
      <img src="./header-x1.png" alt="" />
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
