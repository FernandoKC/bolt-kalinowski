import React from "react";

import Navbar from "./components/navbar/navbar"
import ItemList from '../itemList/itemList';

class App extends React.Component {
	
	render() {
		return ( 
      <div>
        <Navbar/>
        <ItemList initial={1}/>
      </div>
    );
	}
}

export default App;