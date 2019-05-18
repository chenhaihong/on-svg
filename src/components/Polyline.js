import React from 'react';
import styleMerge from '../helper/styleMerge';

export default class Polyline extends React.Component {
  render() {
    const {
      points,
      fill,   // 内部填充
      stroke, // 边框
      style,  // 自定义样式
      ...others
    } = this.props;
    const _style = styleMerge(fill, stroke, style); // 存放fill、stroke与自定义样式

    // [bugfix]：浏览器默认会被折线加上填充色，这里去除这个默认显示问题。
    !_style.fill && (_style.fill = 'none');

    return (
      <polyline points={points} style={_style} {...others} />
    );
  }
}