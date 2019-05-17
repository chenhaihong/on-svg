/**
 * Ellipse属性:
 * cx、cy: 椭圆中心的x和y坐标
 * rx: 椭圆的水平半径
 * ry: 椭圆的垂直半径
 * style: fill、stroke统一放到style里面
 */

import React from 'react';

export default class Ellipse extends React.Component {
  render() {
    const {
      x = 0, y = 0,
      radius = {}, // 半径
      fill = {},   // 内部填充
      stroke = {}, // 边框
      style,       // 自定义样式
      ...others
    } = this.props;
    let _style = {}, // 存放fill、stroke与自定义样式
      _radius = {};  // 存放椭圆的半径

    // 合并填充样式的逻辑
    const {
      color: fillColor,
      opacity: fillOpacity,
    } = fill;
    fillColor && (_style.fill = fillColor);
    (fillOpacity || fillOpacity === 0) && (_style.fillOpacity = fillOpacity);

    // 合并stroke样式的逻辑
    const {
      color: strokeColor,
      width: strokeWidth = 0,
      linecap: strokeLinecap,
      dasharray: strokeDasharray,
    } = stroke;
    strokeColor && (_style.stroke = strokeColor);
    (strokeWidth || strokeWidth === 0) && (_style.strokeWidth = strokeWidth);
    strokeDasharray && (_style.strokeDasharray = strokeDasharray);
    strokeLinecap && (_style.strokeLinecap = strokeLinecap);

    // 合并自定义style属性的逻辑
    style && (_style = { ..._style, ...style });

    // 合并椭圆两个半径的逻辑
    if (typeof radius === 'number') { // 假如radius属性是一个数字，直接赋值给rx、ry
      _radius = { rx: radius, ry: radius };
    } else if (Object.prototype.toString.call(radius) === '[object Object]') { // 如果是一个纯数据对象
      let { x: rx, y: ry } = radius;
      rx && ry && (_radius = { rx, ry }); // rx、ry必须都为数字才能赋值。解决跨浏览器的兼容问题。
    }

    return (
      <ellipse cx={x} cy={y} {..._radius} style={_style} {...others} />
    );
  }
}