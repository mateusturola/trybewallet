import {
  LockClosedIcon,
  PlusCircleIcon,
  XCircleIcon,
} from '@heroicons/react/solid';
import React, { Component } from 'react';
import ReactModal from 'react-modal';
import BtnAddExpenses from '../components/BtnAddExpenses';
import ExpenseForm from '../components/ExpenseForm';

class ExpenseAdd extends Component {
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
    const { showModal } = this.state;
    return (
      <div>
        <BtnAddExpenses onClickButton={this.handleOpenModal} />
        <ReactModal
          isOpen={showModal}
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
          <button onClick={this.handleCloseModal}>
            <XCircleIcon className="h-6 w-6 absolute top-5 right-5 text-indigo-500 hover:text-indigo-600 ml-1 mr-1 float-right" />
          </button>
          <ExpenseForm closeModal={this.handleCloseModal} />
        </ReactModal>
      </div>
    );
  }
}

export default ExpenseAdd;
