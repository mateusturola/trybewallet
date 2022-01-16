import React, { Component } from 'react';

import Routes from './pages/Routes';

class App extends Component {
  render() {
    return (
      <div className="bg-slate-300  min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Routes />
      </div>
    );
  }
}

export default App;
