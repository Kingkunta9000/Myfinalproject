import React, { Component } from "react";
import Weirdnav from "./Weirdnav";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ProductList from "./ProductList";
import { Routes ,Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import NoMatchPage from "./NoMatchPage";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Weirdnav />
        <div className="container-fluid">
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/login" element={<Login/>} />           
            <Route path="/Productss" element={<ProductList/>} />
            
            <Route path="*" element={<NoMatchPage/>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
