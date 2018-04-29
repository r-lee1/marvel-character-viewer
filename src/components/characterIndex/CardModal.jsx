import React from 'react';

class CardModal extends React.Component {

  render() {
    return(
        <div className="cardContent">
          <h2 className="cardTitle">{this.props.characterData.name}</h2>
          <div>
            <img className="cardPortrait"
              src={`${this.props.characterData.thumbnail.path}/portrait_uncanny.jpg`}
              alt={`${this.props.characterData.name} portrait`}/>
            <p className="cardDescription">{this.props.characterData.description ? this.props.characterData.description : "Information Not Available"}</p>
          </div>
        </div>
    );
  }
}

export default CardModal;
