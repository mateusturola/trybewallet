import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import addTotal, { addTags } from "../helpers";
import carteira from "../img/carteira.png";

class Header extends Component {
  render() {
    const { email, expense, image } = this.props;
    const totalValue = addTotal(expense);
    const navigation = [email];
    addTags(expense);

    return (
      <header className="flex h-20 w-full justify-around items-center">
        <div className="flex-shrink-0 flex items-center justify-center">
          <img
            className="block lg:hidden h-10 w-auto"
            src={carteira}
            alt="logo"
          />
          <img
            className="hidden lg:block h-10 w-auto"
            alt="Workflow"
            src={carteira}
          />
          <h2 className="ml-2 sm:hidden  lg:block text-center text-2xl font-extrabold ">
            TribeWallet
          </h2>
        </div>
        <div className="sm:block sm:ml-6">
          <div className="flex space-x-4">
            {navigation.map((item) => (
              <div
                key={item}
                className="bg-gray-900  text-gray-300
                  hover:bg-gray-700 hover:text-white
                  px-3 py-2 rounded-md text-sm font-medium"
                aria-current={item.current ? "page" : undefined}
              >
                {item}
              </div>
            ))}
            <img className="h-10 w-10 rounded-full" src={image} alt="" />
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  expense: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  image: state.user.profilePicture,
  expense: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
