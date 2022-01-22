import React, { Component } from 'react';
import ReactModal from 'react-modal';
import ExpenseForm from './ExpenseForm';

class ModalMt extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal}>Adicionar despesa</button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Adicionar despesa"
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.83)',
            },
            content: {
              color: '#1e293b',
              background: 'rgb(30, 41, 59)',
              width: '50%',
              height: '50%',
              margin: '0 auto',
              color: 'white',
              borderRadius: '.75rem',
              border: '0 solid #e5e7eb',
            },
          }}
        >
          <button onClick={this.handleCloseModal}>X</button>
          <ExpenseForm />
        </ReactModal>
      </div>
    );
  }
}

export default ModalMt;
