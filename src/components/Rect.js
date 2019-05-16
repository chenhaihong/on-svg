/**
 * rect属性:
 * x
 * y
 * width
 * height
 * rx: 从顶点出发的水平圆角距离
 * ry: 从顶点出发的竖直圆角距离
 * style: fill、stroke统一放到style里面
 */

/**
 * bug：当`rx=10，ry=0`时，MS Edge下显示为`rx=10、ry=10`的效果。但是，谷歌能正常显示`rx=10、ry=0`的效果。
 * 解决方案：限制当`rx && ry`，2者均为数字时，可以正常赋值。
 */

import React from 'react';

export default class Rect extends React.Component {
  render() {
    const {
      x = 0, y = 0, width, height,
      radius = {}, // 圆角相关
      fill = {},   // 内部填充
      stroke = {}, // 边框
      style,       // 自定义样式
    } = this.props;
    let _style = {}, // 自定义样式
      _radius = {};  // 圆角相关

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
      dasharray: strokeDasharray,
    } = stroke;
    strokeColor && (_style.stroke = strokeColor);
    (strokeWidth || strokeWidth === 0) && (_style.strokeWidth = strokeWidth);
    strokeDasharray && (_style.strokeDasharray = strokeDasharray);

    // 合并自定义style属性的逻辑
    style && (_style = { ..._style, ...style });

    // 合并圆角的逻辑
    if (typeof radius === 'number') { // 假如radius属性是一个数字，直接赋值给rx、ry
      _radius = { rx: radius, ry: radius };
    } else if (Object.prototype.toString.call(radius) === '[object Object]') { // 如果是一个纯数据对象
      let { x: rx, y: ry } = radius;
      rx && ry && (_radius = { rx, ry }); // rx、ry必须都为数字才能赋值。解决跨浏览器的兼容问题。
    }

    return (
      <rect x={x} y={y} width={width} height={height}
        {..._radius}
        style={_style}
      />
    );
  }
}
