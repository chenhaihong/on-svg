import React from 'react';
import { Circle, Ellipse } from 'on-svg';

export default class Ball extends React.Component {
  render() {
    const { center } = this.props;
    return (
      <React.Fragment>
        <Circle center={center} radius={80}
          fill={{ color: 'red', opacity: 0.5 }}
          stroke={{ color: 'black', width: 2, opacity: 0.4 }} />
        <Ellipse center={center} radius={{ x: 80, y: 12 }}
          fill={{ color: 'yellow', opacity: 0 }}
          stroke={{ color: 'black', width: 5, dasharray: '1 3' }} />
        <Ellipse center={center} radius={{ x: 80, y: 35 }}
          fill={{ color: 'yellow', opacity: 0 }}
          stroke={{ color: 'black', width: 5, dasharray: '1 3' }} />
        <Ellipse center={center} radius={{ x: 80, y: 60 }}
          fill={{ color: 'yellow', opacity: 0 }}
          stroke={{ color: 'black', width: 5, dasharray: '1 3' }} />
        <Ellipse center={center} radius={80}
          fill={{ color: 'yellow', opacity: 0 }}
          stroke={{ color: 'black', width: 5, dasharray: '1 10', linecap: 'initial' }} />
      </React.Fragment>
    );
  }
}