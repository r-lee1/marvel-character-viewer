import React from 'react';
import CardModal from './characterIndex/CardModal';

class Modal extends React.Component {

  render() {
    if (!this.props.modalIsOpen) {
      return null;
    }

    return (
      <div>
        <div className="modalPortal">
          <CardModal characterData={this.props.characterData} closeModal={this.closeModal}/>
          <button className="modalCloseBtn" onClick={this.props.closeModal}>X</button>
        </div>
        {this.props.modalIsOpen && <div className="backdrop" onClick={this.props.closeModal}></div>}
    </div>
    );
  }
}

export default Modal;
