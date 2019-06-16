import React from 'React';

export default class G extends React.Component {
  render() {
    const { chidlren, ...others } = this.props;
    return (
      <g {...others}>
        {chidlren}
      </g>
    );
  }
}