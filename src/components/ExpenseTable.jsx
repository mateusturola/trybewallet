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
      <table>
        <tbody>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          <ExpenseLine expenses={ expenses } />
        </tbody>
      </table>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(ExpenseTable);
