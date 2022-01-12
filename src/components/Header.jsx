import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import addTotal from '../helpers';

class Header extends Component {
  render() {
    const { email, expense } = this.props;
    return (
      <header>
        <div data-testid="email-field">{email}</div>
        <div data-testid="total-field">{addTotal(expense)}</div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expense: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expense: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
