import React from 'react';
import { Polygon, Circle } from 'on-svg';

export default class Star extends React.Component {
  render() {
    const { center: { x, y }, radius: r } = this.props;

    const deg = parseFloat(Math.PI / 180, 2),
      A = [x, y - r],
      B = [x - r * Math.sin(36 * deg), y + r * Math.cos(36 * deg)],
      C = [x + r * Math.sin(72 * deg), y - r * Math.cos(72 * deg)],
      D = [x - r * Math.sin(72 * deg), y - r * Math.cos(72 * deg)],
      E = [x + r * Math.sin(36 * deg), y + r * Math.cos(36 * deg)];

    return (
      <React.Fragment>
        <Circle center={{ x, y }} radius={r}
          fill={{ color: 'black', opacity: 0.8 }}
          stroke={{ color: 'red', width: 5, opacity: 1 }} />
        <Polygon points={[A, B, C, D, E]}
          fill={{ color: 'red', opacity: 0.3, rule: 'nonzero' }}
          stroke={{ color: 'red', width: 1, opacity: 1, linecap: 'round' }} />
      </React.Fragment>
    );
  }
}