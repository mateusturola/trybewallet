import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';
import { editExpense, removeExpense } from '../Redux/actions';
import ExpenseEdt from './ExpenseEdt';

class ExpenseLine extends Component {
  submitEdit = (id) => {
    const { startEdit } = this.props;
    startEdit(id);
  };

  render() {
    const { expenses, removeExpenseDPS, startEdit } = this.props;
    const classLine = 'border  border-slate-700 p-4 text-slate-400 text-center';
    return (
      <>
        {expenses.map(
          ({
            id,
            description,
            tag,
            method,
            value,
            exchangeRates,
            currency,
          }) => (
            <tr key={id} className="hover:dark:bg-slate-600">
              <td className={classLine}>{description}</td>
              <td className={classLine}>{tag}</td>
              <td className={classLine}>{method}</td>
              <td className={classLine}>{value}</td>
              <td className={classLine}>
                {exchangeRates[currency].name.split('/')[0]}
              </td>
              <td className={classLine}>
                {`R$ ${Number(exchangeRates[currency].ask).toFixed(2)}`}
              </td>
              <td className={classLine}>
                {`R$ ${Number(exchangeRates[currency].ask * value).toFixed(2)}`}
              </td>
              <td className={classLine}>
                <ExpenseEdt />
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={() => removeExpenseDPS(id)}
                >
                  <TrashIcon className="h-5 w-5 text-indigo-500 hover:text-indigo-600 ml-1 mr-1" />
                </button>
              </td>
            </tr>
          )
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
    })
  ).isRequired,
  removeExpenseDPS: PropTypes.func.isRequired,
  startEdit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  removeExpenseDPS: (id) => dispatch(removeExpense(id)),
  startEdit: (id) => dispatch(editExpense(id)),
});

export default connect(null, mapDispatchToProps)(ExpenseLine);
