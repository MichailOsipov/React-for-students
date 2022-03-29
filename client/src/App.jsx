import React, { Component } from "react";
import "./App.css";

class App extends Component {
  componentDidMount() {
    fetch('/api/cats').then(data => data.json()).then(data => console.log(data));

    fetch('/api/cat', {
      body: JSON.stringify({ cat: 'moo' }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
    })
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