import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import CharacterIndex from "./components/CharacterIndex";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      characters: []
    };

  }

  componentDidMount() {
    let endpoint = "https://gateway.marvel.com:443/v1/public/characters?limit=50&offset=0&apikey=f2e4cc1aa98d9360e478bc7764a35844";
    fetch(endpoint)
      .then(res => res.json())
      .then(res => this.setState({characters: res.data.results}));
  }

  render() {
    if(this.state.characters.length < 1) {
      return (
        <div className="loader">
          <h2>Loading...</h2>
        </div>
      );
    }

    return (
      <div className="main">
        <Header />
        <CharacterIndex characters={this.state.characters}/>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
