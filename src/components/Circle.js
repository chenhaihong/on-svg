/**
 * circle属性:
 * cx、cy: 圆点的x和y坐标
 * r: 圆的半径
 * style: fill、stroke统一放到style里面
 */

import React from 'react';

export default class Circle extends React.Component {
  render() {
    const {
      x = 0, y = 0,
      radius,      // 半径
      fill = {},   // 内部填充
      stroke = {}, // 边框
      style,       // 自定义样式
      ...others
    } = this.props;
    let _style = {}; // 存放fill、stroke与自定义样式

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

    return (
      <circle cx={x} cy={y} r={radius} style={_style} {...others} />
    );
  }
}