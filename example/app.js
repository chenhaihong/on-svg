import React from 'react';
import ReactDOM from 'react-dom';
import OnSvg, { Rect, Circle, Ellipse, Line, Polyline } from 'on-svg';

class App extends React.Component {
  render() {
    return (
      <OnSvg width='100%' height='400' style={{ background: 'yellowgreen' }}>
        <Rect start={{ x: 10, y: 10 }} width='100' height='100'
          radius={{ x: 0, y: 50 }}
          fill={{ color: 'red', opacity: 1 }}
          stroke={{ color: 'black', width: 10, dasharray: '1 6' }}
        />
        <Circle center={{ x: 200, y: 200 }} radius={80}
          fill={{ color: 'blue', opacity: 0.3 }}
          stroke={{ color: 'black', width: 2, opacity: 0.4 }} />
        <Ellipse center={{ x: 200, y: 200 }} radius={{ x: 80, y: 12 }}
          fill={{ color: 'yellow', opacity: 0 }}
          stroke={{ color: 'black', width: 5, dasharray: '1 3' }} />
        <Ellipse center={{ x: 200, y: 200 }} radius={{ x: 80, y: 35 }}
          fill={{ color: 'yellow', opacity: 0 }}
          stroke={{ color: 'black', width: 5, dasharray: '1 3' }} />
        <Ellipse center={{ x: 200, y: 200 }} radius={{ x: 80, y: 60 }}
          fill={{ color: 'yellow', opacity: 0 }}
          stroke={{ color: 'black', width: 5, dasharray: '1 3' }} />
        <Ellipse center={{ x: 200, y: 200 }} radius={80}
          fill={{ color: 'yellow', opacity: 0 }}
          stroke={{ color: 'black', width: 5, dasharray: '1 10', linecap: 'round' }} />
        <Line start={{ x: 300, y: 300 }} end={{ x: 300, y: 360 }}
          stroke={{ color: 'red', width: 10, opacity: 0.6, linecap: 'round' }} />
        <Polyline points='300,300 340,300 300,330'
          fill={{ color: 'red', opacity: 0.5 }}
          stroke={{ color: 'red', width: 2, opacity: 0.6, linecap: 'round' }} />
      </OnSvg>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => {
    ReactDOM.render(<App />, document.querySelector('#root'));
  });
}