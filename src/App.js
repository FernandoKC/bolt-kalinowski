import React from "react";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Navbar from "./components/navbar/navbar"

import Detail from "./views/Detail/Detail";
import ItemList from "./components/itemList/itemList";


const App = () => {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/ItemList" component={ItemList}/>
          <Route path="/Detail/:id" component={Detail}/>
        </Switch>
      </div>
    </Router>
  );

};

export default App;

