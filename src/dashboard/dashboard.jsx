import React, { Component } from 'react';
import Hotels from './hotels/components/hotels/hotels';

class DashBoard extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>DashBoard</h1>
        <Hotels />
      </React.Fragment>
    );
  }
}

export default DashBoard;
