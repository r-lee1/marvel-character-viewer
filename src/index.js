import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import CharacterIndex from "./components/characterIndex/CharacterIndex";

import { keys } from "./keys";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      characters: []
    };

  }

  componentDidMount() {
    let apikey = keys().apikey;
    let endpoint = `https://gateway.marvel.com:443/v1/public/characters?limit=100&offset=0&apikey=${apikey}`;
    fetch(endpoint)
      .then(res => res.json())
      .then(res => this.setState({characters: res.data.results}));
  }

  cleanData(fetchedCharacters) {
    let arr = ["Pete Wisdom", "Synch", "Unus (Ultimate)"];
    return fetchedCharacters.filter((char) => {
      return (char.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" &&
      char.description !== "" && !arr.includes(char.name));
    });
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
        <CharacterIndex characters={this.state.characters} cleanData={this.cleanData}/>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
