import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { madeDate } from '../helpers';

class Cambio extends Component {
  render() {
    const { exchanges } = this.props;

    return (
      <>
        <h2 className="text-center text-2xl font-extrabold">Taxa de câmbio</h2>
        <p className="mt-10 mb-10 text-center text-xs font-mono">{madeDate()}</p>
        {exchanges.map((ex) => (
          <p key={ ex.code } className="w-full">
            <span>{ex.name.split('/')[0]}</span>
            <span>{Number(ex.ask).toFixed(2)}</span>
          </p>
        ))}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  exchanges: state.wallet.exchanges,
});

Cambio.propTypes = {
  exchanges: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      codein: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default connect(mapStateToProps)(Cambio);
