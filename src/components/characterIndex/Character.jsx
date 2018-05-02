import React from 'react';
import Modal from '../characterCard/Modal';

class Character extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characterData: this.props.characterData,
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="char">
        <div onClick={this.openModal} className="charBlock">
          <img className="charThumbnail"
            src={`${this.props.characterData.thumbnail.path}/standard_xlarge.jpg`}
            alt={`${this.props.characterData.name} thumbnail`} />
          <h2 className="charName">{this.props.characterData.name}</h2>
        </div>
        <Modal
          modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
          characterData={this.state.characterData}
          >
        </Modal>
    </div>
    );
  }
}

export default Character;
