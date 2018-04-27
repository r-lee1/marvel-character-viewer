import React from 'react';
import Modal from 'react-modal';
import CardModal from './CardModal';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characterData: this.props.characterData,
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount(){
    Modal.setAppElement('#root');
  }

  openModal() {
    console.log("clickylcickklwaea");
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    console.log("model closing");
    this.setState({modalIsOpen: false}, () => console.log(this.state));
  }

  render() {
    return (
      <div>
        <div onClick={this.openModal} className="charBlock">
          <img className="charThumbnail" src={`${this.props.characterData.thumbnail.path}/standard_xlarge.jpg`} alt={`${this.props.characterData.name} thumbnail`} />
          <h2 className="charName">{this.props.characterData.name}</h2>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={() => {this.setState({ modalIsOpen: false });}}
          shouldCloseOnOverlayClick={true}
          >
          <CardModal characterData={this.state.characterData} closeModal={this.closeModal}/>
          <button onClick={this.closeModal}>Close</button>
        </Modal>
    </div>
    );
  }
}

export default Card;
