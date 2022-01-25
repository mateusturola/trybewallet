import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseFormEdit from '../components/ExpenseFormEdit';
import ExpenseTable from '../components/ExpenseTable';
import Header from '../components/Header';
import Cambio from '../components/Cambio';
import ChartTags from '../components/ChartTags';
import CardPanel from '../components/CardPanel';
import ExpenseAdd from '../components/ExpenseAdd';
import UserInfos from '../components/UserInfos';
import ChartMethod from '../components/ChartMethod';

class Wallet extends React.Component {
  render() {
    const { startEdit, expenses } = this.props;
    return (
      <div className="w-full mx-0">
        <div className="w-full relative flex items-center justify-around bg-gray-800">
          <Header />
        </div>
        <div className="flex justify-evenly  my-10  ">
          <CardPanel>
            <UserInfos />
          </CardPanel>
          <CardPanel>
            <ChartTags />
          </CardPanel>
          <CardPanel>
            <ChartMethod />
          </CardPanel>
        </div>
        {startEdit && <ExpenseFormEdit />}
        <h2 className="mt-10 mb-10 text-center text-2xl font-extrabold">
          Despesas
        </h2>
        <div className="overflow-x-auto ml-8 mr-8">
          <ExpenseTable />
        </div>
      </div>
    );
  }
}

Wallet.propTypes = {
  startEdit: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  startEdit: state.wallet.edit,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Wallet);
