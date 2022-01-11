import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

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
          {expenses.map((exp) => (
            <tr key={ exp.id }>
              <td>{exp.description}</td>
              <td>{exp.tag}</td>
              <td>{exp.method}</td>
              <td>{exp.value}</td>
              <td>{exp.currency}</td>
              <td>{exp.exchangeRates[exp.currency].ask}</td>
              <td>{exp.exchangeRates[exp.currency].ask * exp.value}</td>
              <td>{exp.exchangeRates[exp.currency].name}</td>
              <td>Editar/Excluir</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

// ExpenseTable.propTypes = {};(
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(ExpenseTable);
