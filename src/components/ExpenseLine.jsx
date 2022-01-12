import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Btn from './Btn';

class ExpenseLine extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <>
        {expenses.map(
          ({ id, description, tag, method, value, exchangeRates, currency }) => (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{exchangeRates[currency].name.split('/')[0]}</td>
              <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
              <td>{Number(exchangeRates[currency].ask * value).toFixed(2)}</td>
              <td>Real</td>
              <td>
                <Btn label="Excluir" dataTest="delete-btn" id={ id } />
              </td>
            </tr>
          ),
        )}
      </>
    );
  }
}

ExpenseLine.propTypes = {
  expenses: PropTypes.node.isRequired,
};

export default ExpenseLine;
