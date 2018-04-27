import React from 'react';

class CardModal extends React.Component {

  render() {
    return(
        <div>
          <img className="" src={`${this.props.characterData.thumbnail.path}/portrait_uncanny.jpg`} alt={`${this.props.characterData.name} portrait`}/>
          <h2 className="">{this.props.characterData.name}</h2>
          <p>{this.props.characterData.description}</p>
        </div>
    );
  }
}

export default CardModal;
