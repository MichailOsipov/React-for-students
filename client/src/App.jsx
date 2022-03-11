import React, { Component } from "react";
import "./App.css";

class App extends Component {
  componentDidMount() {
    fetch('/api/cat').then(data => data.json()).then(data => console.log(data));
  }

  render(){
    return(
      <div className="App">
        <h1> Hello, World!2 </h1>
      </div>
    );
  }
}

export default App;