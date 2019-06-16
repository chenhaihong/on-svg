import React from 'React';

export default class Symbol extends React.Component {
  render() {
    const { chidlren, ...others } = this.props;
    return (
      <symbol {...others}>
        {chidlren}
      </symbol>
    );
  }
}