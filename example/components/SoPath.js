import React from 'react';
import { Path } from 'on-svg';

export default class SoPath extends React.Component {
  render() {
    const d = [
      Path.MoveTo(500, 100),
      Path.lineTo(200, 0),
      // Path.MoveTo(700, 100),
      Path.CurveTo(750, 100, 750, 200, 700, 200),
      // Path.MoveTo(700, 200),
      Path.horizontalLineto(-200),
      Path.MoveTo(500, 200),
      Path.EllipticalArcTo(100, 50, 0, 1, 1, 500, 100),
      Path.ClosePath(),
    ];
    return (
      <React.Fragment>
        <Path d={d}
          fill={{ color: 'red' }}
          stroke={{ color: 'black', width: 1, opacity: 0.5, linecap: 'round' }} />
      </React.Fragment>
    );
  }
}