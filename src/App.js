import React from "react";
import './App.css';
import { BrowserRouter as Router ,Route } from "react-router-dom";
import { BrowserRouter as Routes } from "react-router-dom";
import Header from "./Components/Header/Header.js"; 
import Home from "./Components/Home/Home";
import Product from "./Components/Product/Product"
function App() {
  return (
    <Router>
      <div className="app">
       <Routes>
        <Route exact path="/checkout">
          <Header />
        <h1>checkout</h1>
        </Route>
        <Route exact path ="/login" >
          <Header />
          <h1> login</h1>
        </Route >
        <Route exact path="/">
          <Header />
          <Home />
          
        </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
 
  //   we need react router
  //   localhost.com
  //   localhost.com/checkout
  //   localhost.com/login
