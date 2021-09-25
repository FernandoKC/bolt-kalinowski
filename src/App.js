import React from "react";
import Navbar from "./components/navbar/navbar"
import ItemListContainer from "./components/itemListContainer/itemListContainer";

class App extends React.Component {
	
	render() {
		return ( 
      <div>
        <Navbar/>
        <ItemListContainer greeting='username'/>
      </div>
    );
	}
}

export default App;

