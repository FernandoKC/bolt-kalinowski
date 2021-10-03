import React from "react";
import Navbar from "./components/navbar/navbar"
import ItemListContainer from "./components/itemListContainer/itemListContainer";

class App extends React.Component {
	
	render() {
		return ( 
      <div>
        <Navbar/>
        <ItemListContainer item='cookies' initial='1' stock='6'/>
      </div>
    );
	}
}

export default App;

