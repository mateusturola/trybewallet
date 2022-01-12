import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense } from '../actions';

class ExpenseLine extends Component {
  render() {
    const { expenses, removeExpenseDPS } = this.props;
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
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => removeExpenseDPS(id) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ),
        )}
      </>
    );
  }
}

ExpenseLine.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  removeExpenseDPS: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  removeExpenseDPS: (id) => dispatch(removeExpense(id)),
});

export default connect(null, mapDispatchToProps)(ExpenseLine);
