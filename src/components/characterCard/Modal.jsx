import React from 'react';
import Card from './Card';

class Modal extends React.Component {

  render() {
    if (!this.props.modalIsOpen) {
      return null;
    }

    return (
      <div>
        <div className="modalPortal">
          <Card characterData={this.props.characterData} closeModal={this.closeModal}/>
          <button className="modalCloseBtn" onClick={this.props.closeModal}>X</button>
        </div>
        {this.props.modalIsOpen && <div className="backdrop" onClick={this.props.closeModal}></div>}
    </div>
    );
  }
}

export default Modal;
