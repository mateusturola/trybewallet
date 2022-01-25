import React from 'react';
import { connect } from 'react-redux';
import addTotal from '../helpers';
// import PropTypes from 'prop-types';
import ExpenseAdd from './ExpenseAdd';

const propTypes = {};

const defaultProps = {};

const UserInfos = ({ expense }) => {
  const totalValue = addTotal(expense);

  return (
    <div className="h-full flex flex-col justify-between content-around ">
      <h2 className="font-semibold uppercase tracking-wide text-center mb-2">
        Valor Total
      </h2>
      <span className="text-3xl tracking-tight text-white font-extrabold mx-3">
        {`R$ ${totalValue.toFixed(2)}`}
      </span>
      <ExpenseAdd />
    </div>
  );
};

UserInfos.propTypes = propTypes;
UserInfos.defaultProps = defaultProps;

const mapStateToProps = (state) => ({
  expense: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(UserInfos);
