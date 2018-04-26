import React from "react";
import Card from "./Card";

import characters from "../data.json";

class CardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characterData:
        characters.data.results
    };
  }

  render() {
    return (
      <ul>
        {this.state.characterData.map(
          character => {
            return <Card characterData={character} key={character.id}/>;
          }
        )}
      </ul>
    );
  }
}

export default CardIndex;
