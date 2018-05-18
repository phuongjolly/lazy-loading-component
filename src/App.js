//follow lazy-loading-component
//from: https://github.com/Aljullu/react-lazy-load-image-component
//with improvement method

import React, { Component } from 'react';
import './App.css';
import LazyLoading from "./LazyLoading";

class App extends Component {
  render() {
    return (
      <LazyLoading/>
    );
  }
}

export default App;
