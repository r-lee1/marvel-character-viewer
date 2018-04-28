import React from "react";
import Card from "./Card";
import Pagination from "./Pagination";

class CardIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters:
        this.props.characters,
      characterSet:
        this.props.characters
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfCharacters) {
    this.setState({characterSet: pageOfCharacters});
  }

  render() {
    return (
      <div className="charPage">
        <div className="charIndex">
          {this.state.characterSet.map(
            character => {
              return <Card characterData={character} key={character.id}/>;
            }
          )}
        </div>
        <Pagination characters={this.state.characters} onChangePage={this.onChangePage}/>
      </div>
    );
  }
}

export default CardIndex;
