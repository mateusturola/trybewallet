import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseLine from './ExpenseLine';

class ExpenseTable extends Component {
  render() {
    const {
      props: { expenses },
    } = this;
    return (
      <table
        className="border-collapse w-full border border-slate-400
      dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm "
      >
        <thead className="bg-slate-50 dark:bg-slate-700">
          <tr>
            <th className="px-4 py-5 sm:px-6">Descrição</th>
            <th className="px-4 py-5 sm:px-6">Tag</th>
            <th className="px-4 py-5 sm:px-6">Método de pagamento</th>
            <th className="px-4 py-5 sm:px-6">Valor</th>
            <th className="px-4 py-5 sm:px-6">Moeda</th>
            <th className="px-4 py-5 sm:px-6">Câmbio utilizado</th>
            <th className="px-4 py-5 sm:px-6">Valor convertido</th>
            <th className="px-4 py-5 sm:px-6">Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          <ExpenseLine expenses={ expenses } />
        </tbody>
      </table>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(ExpenseTable);
