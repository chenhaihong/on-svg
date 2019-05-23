import React from 'react';

export default class Svg extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      children,
      version = '1.1',
      xmlns = 'http://www.w3.org/2000/svg',
      ...others
    } = this.props;
    return (
      <svg version={version} xmlns={xmlns} {...others}>
        {children}
      </svg>
    );
  }
}