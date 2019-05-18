/**
 * Ellipse属性:
 * cx、cy: 椭圆中心的x和y坐标
 * rx: 椭圆的水平半径
 * ry: 椭圆的垂直半径
 * style: fill、stroke统一放到style里面
 */

import React from 'react';
import styleMerge from '../helper/styleMerge';

export default class Ellipse extends React.Component {
  render() {
    const {
      center: { x, y } = { x: 0, y: 0 }, // 中心坐标
      radius, // 半径
      fill,   // 内部填充
      stroke, // 边框
      style,  // 自定义样式
      ...others
    } = this.props;
    let _radius = {}, // 存放椭圆的半径
      _style = styleMerge(fill, stroke, style); // 存放fill、stroke与自定义样式

    // 合并椭圆两个半径的逻辑
    // 假如radius属性是一个数字，直接赋值给rx、ry
    if (typeof radius === 'number') {
      _radius = { rx: radius, ry: radius };
    }
    // 如果是一个纯数据对象
    else if (Object.prototype.toString.call(radius) === '[object Object]') {
      const { x: rx, y: ry } = radius;
      // 当只设置了一个半径时，椭圆无法成型。所以，rx、ry必须都为数字才能赋值。
      rx && ry && (_radius = { rx, ry });
    }

    return (
      <ellipse cx={x} cy={y} {..._radius} style={_style} {...others} />
    );
  }
}