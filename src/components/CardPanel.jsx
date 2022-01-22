import React, { Component } from 'react';

class CardPanel extends Component {
  render() {
    const { children } = this.props;
    return (
      <div
        className="
        z-0 -ml-10 col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 max-h-80 w-1/5 space-y-2
      overflow-x-auto p-5"
      >
        {children}
      </div>
    );
  }
}

export default CardPanel;
