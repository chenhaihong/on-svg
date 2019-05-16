import React from 'react';
import ReactDOM from 'react-dom';
import OnSvg, { Rect, Circle, Ellipse } from 'on-svg';

class App extends React.Component {
  render() {
    return (
      <OnSvg width='100%' height='400' style={{ background: 'yellowgreen' }}>
        <Rect x={10} y={10} width='100' height='100'
          radius={{ x: 0, y: 50 }}
          fill={{ color: 'red', opacity: 1 }}
          stroke={{ color: 'black', width: 10, dasharray: '1 6' }}
        />
        <Circle x={200} y={200} radius={80}
          fill={{ color: 'blue', opacity: 0.3 }}
          stroke={{ color: 'black', width: 2 }} />
        <Ellipse x={200} y={200} radius={{ x: 80, y: 12 }}
          fill={{ color: 'yellow', opacity: 0 }}
          stroke={{ color: 'black', width: 5, dasharray: '1 3' }} />
        <Ellipse x={200} y={200} radius={{ x: 80, y: 35 }}
          fill={{ color: 'yellow', opacity: 0 }}
          stroke={{ color: 'black', width: 5, dasharray: '1 3' }} />
        <Ellipse x={200} y={200} radius={{ x: 80, y: 60 }}
          fill={{ color: 'yellow', opacity: 0 }}
          stroke={{ color: 'black', width: 5, dasharray: '1 3' }} />
        <Ellipse x={200} y={200} radius={80}
          fill={{ color: 'yellow', opacity: 0 }}
          stroke={{ color: 'black', width: 5, dasharray: '1 3' }} />
      </OnSvg>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => {
    ReactDOM.render(<App />, document.querySelector('#root'));
  });
}