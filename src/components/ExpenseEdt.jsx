import { PencilAltIcon, XCircleIcon } from "@heroicons/react/solid";
import React, { Component } from "react";
import ReactModal from "react-modal";
import ExpenseFormEdit from "./ExpenseFormEdit";

class ExpenseEdt extends Component {
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
      <>
        <button
          type="button"
          data-testid="edit-btn"
          onClick={this.handleOpenModal}
        >
          <PencilAltIcon className="h-5 w-5 text-red-500 hover:text-red-600 ml-1 mr-1" />
        </button>
        <ReactModal
          isOpen={showModal}
          contentLabel="Adicionar despesa"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.83)",
            },
            content: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              color: "#1e293b",
              background: "rgb(30, 41, 59)",
              margin: "0 auto",
              color: "white",
              borderRadius: ".75rem",
              border: "0 solid #e5e7eb",
            },
          }}
        >
          <button onClick={this.handleCloseModal}>
            <XCircleIcon className="h-6 w-6 absolute top-5 right-5 text-indigo-500 hover:text-indigo-600 ml-1 mr-1 float-right" />
          </button>
          <ExpenseFormEdit closeModal={this.handleCloseModal} />
        </ReactModal>
      </>
    );
  }
}

export default ExpenseEdt;
