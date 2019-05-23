/**
 * circle属性:
 * cx、cy: 圆点的x和y坐标
 * r: 圆的半径
 * style: fill、stroke统一放到style里面
 */

import React from 'react';
import styleMerge from '../helper/styleMerge';

export default class Circle extends React.Component {
  render() {
    const {
      center: { x, y } = { x: 0, y: 0 }, // 圆心坐标
      radius, // 半径
      fill,   // 内部填充
      stroke, // 边框
      style,  // 自定义样式
      ...others
    } = this.props;
    const _style = styleMerge(fill, stroke, style); // 存放fill、stroke与自定义样式

    return (
      <circle cx={x} cy={y} r={radius} style={_style} {...others} />
    );
  }
}