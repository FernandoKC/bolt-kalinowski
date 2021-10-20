import React from "react";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Navbar from "./components/navbar/navbar"

import Detail from "./views/Detail/Detail";
import ItemList from "./views/ItemList/ItemList";
import Category from "./views/Category/Category";
import Home from "./views/Home/Home";
import Cart from "./views/Cart/Cart";


const App = () => {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/cart" component={Cart}/>
          <Route path="/ItemList" component={ItemList}/>
          <Route path="/Detail/:id" component={Detail}/>
          <Route path="/Category/:id" component={Category}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  );

};

export default App;

