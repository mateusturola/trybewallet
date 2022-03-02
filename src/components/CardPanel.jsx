import React, { Component } from "react";

class CardPanel extends Component {
  render() {
    const { children } = this.props;
    return (
      <div
        className="
        z-0 lg:-ml-10 text-center col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 max-h-80  h-80 sm:w-full w-1/4 
      overflow-x-auto p-5"
      >
        {children}
      </div>
    );
  }
}

export default CardPanel;
