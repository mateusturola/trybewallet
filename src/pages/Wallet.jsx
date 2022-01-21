import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseFormEdit from '../components/ExpenseFormEdit';
import ExpenseTable from '../components/ExpenseTable';
import Header from '../components/Header';
import Example from '../temp';

class Wallet extends React.Component {
  render() {
    const { startEdit } = this.props;
    return (
      <div className="w-full mx-0">
        <div className="w-full relative flex items-center justify-around bg-gray-800">
          <Header />
        </div>
        {startEdit ? <ExpenseFormEdit /> : <ExpenseForm />}
        <h2 className="mt-10 mb-10 text-center text-2xl font-extrabold">Despesas</h2>
        <div className="overflow-x-auto ml-8 mr-8">
          <ExpenseTable />
        </div>
      </div>
    );
  }
}

Wallet.propTypes = {
  startEdit: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  startEdit: state.wallet.edit,
});

export default connect(mapStateToProps, null)(Wallet);
