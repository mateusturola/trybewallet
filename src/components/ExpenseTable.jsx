import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class ExpenseTable extends Component {
  render() {
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
        </tbody>
      </table>
    );
  }
}

// ExpenseTable.propTypes = {};

export default ExpenseTable;
