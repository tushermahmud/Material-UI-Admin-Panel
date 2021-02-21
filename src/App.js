import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EnhancedTable from "./components/Admin/Table";
import Main from "./components/Admin/Main";
import Layout from "./components/Layout";
import { Fragment } from 'react';
import Table from "./components/Admin/Table";
import AddProduct from "./components/Admin/products/AddProduct"
function App() {
  return (
    <Fragment>
      <Router>
        <Layout />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/table">
            <Table />
          </Route>
          <Route exact path="/products">
            <Table />
          </Route>
          <Route exact path="/add-product">
            <AddProduct />
          </Route>
        </Switch>
      </Router>
    </Fragment>

    );
}

export default App;