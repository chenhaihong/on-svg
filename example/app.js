import React from 'react';
import ReactDOM from 'react-dom';
import OnSvg from 'on-svg';

class App extends React.Component {
  render() {
    return (
      <OnSvg width='400' height='400'>
        <text>123</text>
      </OnSvg>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));