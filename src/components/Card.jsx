import React from 'react';
import Modal from 'react-modal';
import CardModal from './CardModal';

Modal.setAppElement('#root');

class Card extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    console.log(this.props.characterData);
    return (
      <div onClick={this.openModal} className="charBlock">
        <img className="charImage" src={`${this.props.characterData.thumbnail.path}/standard_xlarge.jpg`} />
        <h2 className="charName">{this.props.characterData.name}</h2>
        <Modal isOpen={this.state.modalIsOpen}>
          <CardModal props={this.state}/>
        </Modal>
      </div>
    );
  }
}

export default Card;
