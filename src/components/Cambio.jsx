import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Cambio extends Component {
  madeDate = () => {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    const dataAtual = `${dia}/${mes}/${ano}`;
    return `Consulta realizada em: ${dataAtual}`;
  };

  render() {
    const { exchanges } = this.props;
    this.madeDate();
    return (
      <div
        className="max-h-80 w-1/5 space-y-2
      bg-slate-700 shadow overflow-x-auto sm:rounded-lg p-5"
      >
        <h2 className="text-center text-2xl font-extrabold">Taxa de câmbio</h2>
        <p className="mt-10 mb-10 text-center text-xs font-mono">{this.madeDate()}</p>
        {exchanges.map((ex) => (
          <p key={ ex.code } className="w-full">
            <span>{ex.name.split('/')[0]}</span>
            <span>{Number(ex.ask).toFixed(2)}</span>
          </p>
        ))}
      </div>
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
