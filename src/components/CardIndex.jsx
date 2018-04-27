import React from "react";
import Card from "./Card";
import Pagination from "./Pagination";

import characters from "../data.json";

class CardIndex extends React.Component {
  constructor(props) {
    super(props);

    let allCharacters = characters.data.results;

    this.state = {
      allCharacters:
        allCharacters,
      characterData:
        characters.data.results
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfCharacters) {
    this.setState({characterData: pageOfCharacters});
  }

  render() {
    return (
      <div className="charPage">
        <div className="charIndex">
          {this.state.characterData.map(
            character => {
              return <Card characterData={character} key={character.id}/>;
            }
          )}
        </div>
        <Pagination characters={this.state.allCharacters} onChangePage={this.onChangePage}/>
      </div>
    );
  }
}

export default CardIndex;
