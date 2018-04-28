import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import CardIndex from "./components/CardIndex";

class App extends React.Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      characters: []
    }
  }
  
  componentDidMount() {
    
    let endpoint = "https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=f2e4cc1aa98d9360e478bc7764a35844";
    fetch(endpoint)
      .then(res => res.json())
      .then(res => this.setState({characters: res.data.results}));
  }
  
  render() {
    if(this.state.characters.length < 1) {
      return null;
    }
    
    return (
      <div className="main">
        <Header />
        <CardIndex characters={this.state.characters}/>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
