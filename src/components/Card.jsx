import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.characterData} />
      </div>
    );
  }
}

export default Card;
