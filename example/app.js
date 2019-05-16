import React from 'react';
import ReactDOM from 'react-dom';
import OnSvg, { Rect } from 'on-svg';

class App extends React.Component {
  render() {
    return (
      <OnSvg width='400' height='400'>
        <Rect x={10} y={10} width='100' height='100'
          radius={{ x: 0, y: 50 }}
          fill={{ color: 'red', opacity: 1 }}
          stroke={{ color: 'black', width: 10, dasharray: '1 6' }}
        />
        <Rect x={110} y={110} width='100' height='100'
          radius={50}
          fill={{ color: 'blue' }}
          stroke={{ color: 'black', width: 10 }}
        />
      </OnSvg>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));