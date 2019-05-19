import React from 'react';
import ReactDOM from 'react-dom';
import OnSvg, { Rect, } from 'on-svg';
import Ball from './components/Ball';
import Flag from './components/Flag';
import Star from './components/Star';

class App extends React.Component {
  render() {
    return (
      <OnSvg width='100%' height='400' style={{ background: 'yellowgreen' }}>
        <Rect start={{ x: 10, y: 150 }} width='100' height='100'
          radius={{ x: 10, y: 50 }}
          fill={{ color: 'red', opacity: 1 }}
          stroke={{ color: 'black', width: 10, dasharray: '1 6' }}
        />
        <Flag />
        <Star center={{ x: 200, y: 200 }} radius={100} />
        <Ball center={{ x: 200, y: 200 }} />
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