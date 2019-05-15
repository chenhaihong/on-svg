import React from 'react';

export default class Rect extends React.Component {
  render() {
    const {
      x = 0, y = 0, width, height,
      fill = {},   // 内部填充
      stroke = {}, // 边框
      radius = {}, // 圆角相关
      style,       // 自定义样式
    } = this.props;
    let _style = {}, // 自定义样式
      _radius = {};  // 圆角相关

    // 合并fill样式
    const {
      color: fillColor,
      opacity: fillOpacity,
    } = fill;
    fillColor && (_style.fill = fillColor);
    (fillOpacity || fillOpacity === 0) && (_style.fillOpacity = fillOpacity);

    // 合并stroke样式
    const {
      color: strokeColor,
      width: strokeWidth,
      dasharray: strokeDasharray,
    } = stroke;
    strokeColor && (_style.stroke = strokeColor);
    (strokeWidth || strokeWidth === 0) && (_style.strokeWidth = strokeWidth);
    strokeDasharray && (_style.strokeDasharray = strokeDasharray);

    // 合并自定义style属性
    style && (_style = { ..._style, ...style });

    // 圆角相关
    if (typeof radius === 'number') {
      _radius.rx = radius;
      _radius.ry = radius;
    } else {
      let { width: rx, height: ry } = radius;
      (rx || rx === 0) && (_radius.rx = rx);
      (ry || ry === 0) && (_radius.ry = ry);
    }

    return (
      <rect x={x} y={y} width={width} height={height}
        {..._radius}
        style={_style}
      />
    );
  }
}