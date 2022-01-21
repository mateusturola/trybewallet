import React, { Component } from 'react';

import Routes from './pages/Routes';

class App extends Component {
  render() {
    return (
      <div className="bg-slate-900 text-gray-200  min-h-screen flex justify-center">
        <Routes />
      </div>
    );
  }
}

export default App;
