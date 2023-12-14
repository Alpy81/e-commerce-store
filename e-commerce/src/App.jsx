import React from "react";
import "./index.css";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommonded from "./Recommonded/Recommonded";
import Category from "./Sidebar/Category/Category";
import Colors from "./Sidebar/Colors/Colors";
import Price from "./Sidebar/Price/Price";

const App = () => {
  return (
    <>
      <Navigation />
      <Products />
      <Recommonded />
      <Category />
      <Colors />
      <Price />
    </>
  );
};

export default App;
