import React from 'react';
import styleMerge from '../helper/styleMerge';

export default class Line extends React.Component {
  render() {
    const {
      start: { x: x1, y: y1 } = { x: 0, y: 0 }, // 起点坐标
      end: { x: x2, y: y2 } = { x: 0, y: 0 },   // 终点坐标
      stroke, // 边框
      style,  // 自定义样式
      ...others
    } = this.props;
    const _style = styleMerge(null, stroke, style); // 存放fill、stroke与自定义样式

    // 直线不会有填充
    _style.fill && delete _style.fill;
    
    return (
      <line x1={x1} y1={y1} x2={x2} y2={y2} style={_style} {...others} />
    );
  }
}