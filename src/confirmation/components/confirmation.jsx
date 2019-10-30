import React, { Component } from 'react';

class Confirmation extends Component {
  state = {};
  render() {
    const {
      match: {
        params: { roomId }
      }
    } = this.props;
    return (
      <div>
        <h3>Confirmation</h3>
        <div>Room is reserved # {roomId}</div>
      </div>
    );
  }
}

export default Confirmation;
