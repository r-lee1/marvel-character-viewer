import React from "react";
import Card from "./Card";

class CardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characterData:
        "https://vignette.wikia.nocookie.net/scratchu8/images/9/92/Scratch_Cat.jpg/revision/latest?cb=20131008202423"
    };
  }

  render() {
    return <Card characterData={this.state.characterData} />;
  }
}

export default CardIndex;
