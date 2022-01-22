import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Chart } from 'react-google-charts';

import { addTags } from '../helpers';

class ChartTags extends Component {
  render() {
    const { expenses } = this.props;
    const sumTags = addTags(expenses);
    const options = {
      pieHole: 0.6,
      is3D: false,
      legend: { position: 'bottom' },
      backgroundColor: '#334155',
    };
    const tags = [['Tags', 'Value'], ...sumTags];
    return (
      <>
        <h2 className="text-center text-2xl font-extrabold">Tags</h2>

        <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={ tags }
          options={ options }
        />
      </>
    );
  }
}

ChartTags.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(ChartTags);
