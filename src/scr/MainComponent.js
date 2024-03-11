import React, { Component } from 'react';
import FunctionalComponent from './FunctionalComponent';

class MainComponent extends Component {
  render() {
    return (
      <div>
        <h1>hello world</h1>
        <FunctionalComponent />
      </div>
    );
  }
}

export default MainComponent;