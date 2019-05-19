import React from 'react';
import { Line, Polyline } from 'on-svg';

export default class Flag extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Line start={{ x: 300, y: 300 }} end={{ x: 300, y: 360 }}
          stroke={{ color: 'red', width: 10, opacity: 0.6, linecap: 'round' }} />
        <Polyline points='300,300 340,300 300,330'
          fill={{ color: 'red', opacity: 0.5 }}
          stroke={{ color: 'red', width: 2, opacity: 0.6, linecap: 'round' }} />
      </React.Fragment>
    );
  }
}