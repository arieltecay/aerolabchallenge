import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./pages/Home";
import History from "./pages/History";
export const userContext = createContext();

function App() {
  const [userName, setUserName] = useState("");
  const [userPoints, setUserPoints] = useState("");
  const [productsList, setProductsList] = useState([]);
  const [category, setCategory] = useState({ category: "" });

  return (
    <userContext.Provider
      value={{
        userName,
        setUserName,
        userPoints,
        setUserPoints,
        productsList,
        setProductsList,
        category,
        setCategory,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/history" exact component={History} />
        </Switch>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
