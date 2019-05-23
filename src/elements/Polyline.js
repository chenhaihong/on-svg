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
    let _points = '';

    if (typeof points === 'string') {
      _points = points;
    } else if (Array.isArray(points)) {
      _points = points.map(function (item) {
        return item.join(',')
      });
      _points = _points.join(' ');
    }

    return (
      <polyline points={_points} style={_style} {...others} />
    );
  }
}