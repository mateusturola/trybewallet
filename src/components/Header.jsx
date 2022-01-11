import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, sumExpense } = this.props;
    return (
      <header>
        <div data-testid="email-field">{email}</div>
        <div data-testid="total-field">{sumExpense}</div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  sumExpense: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  sumExpense: state.wallet.sumExpense || 0,
});

export default connect(mapStateToProps, null)(Header);
