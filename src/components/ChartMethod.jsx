import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Chart } from 'react-google-charts';

import { addMethod } from '../helpers';

class ChartMethod extends Component {
  render() {
    const { expenses } = this.props;
    const sumMethod = addMethod(expenses);
    const options = {
      pieHole: 0.6,
      is3D: false,
      legend: { position: 'bottom' },
      backgroundColor: 'transparent',
      legend: 'none',
    };
    const method = [['Tags', 'Value'], ...sumMethod];
    return (
      <>
        <h2 className="font-semibold uppercase tracking-wide text-center mb-2">
          Método de pagamento
        </h2>
        {expenses.length === 0 && <p>Adicione despesas</p>}

        <Chart
          chartType="PieChart"
          width="100%"
          data={method}
          options={options}
        />
      </>
    );
  }
}

ChartMethod.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(ChartMethod);
