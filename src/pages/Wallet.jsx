import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseFormEdit from '../components/ExpenseFormEdit';
import ExpenseTable from '../components/ExpenseTable';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    const { startEdit } = this.props;
    return (
      <div>
        <Header />
        {startEdit ? <ExpenseFormEdit /> : <ExpenseForm />}
        <ExpenseTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  startEdit: state.wallet.edit,
});

export default connect(mapStateToProps, null)(Wallet);
