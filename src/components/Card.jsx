import React from "react";

class Card extends React.Component {
  render() {
    console.log(this.props.characterData);
    return (
      <div className="charBlock">
        <img className="charImage" src={`${this.props.characterData.thumbnail.path}/standard_xlarge.jpg`} />
        <h2 className="charName">{this.props.characterData.name}</h2>
      </div>
    );
  }
}

export default Card;
