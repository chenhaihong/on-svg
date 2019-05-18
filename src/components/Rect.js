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

import React from 'react';
import styleMerge from '../helper/styleMerge';

export default class Rect extends React.Component {
  render() {
    const {
      start: { x, y } = { x: 0, y: 0 }, // 起点坐标
      width, height,
      radius, // 圆角相关
      fill,   // 内部填充
      stroke, // 边框
      style,  // 自定义样式
      ...others
    } = this.props;
    let _radius = {}, // 圆角相关
      _style = styleMerge(fill, stroke, style); // 存放fill、stroke与自定义样式

    // 合并圆角的逻辑
    // 假如radius属性是一个数字，直接赋值给rx、ry
    if (typeof radius === 'number') {
      _radius = { rx: radius, ry: radius };
    }
    // 如果是一个纯数据对象
    else if (Object.prototype.toString.call(radius) === '[object Object]') {
      const { x: rx, y: ry } = radius;
      /**
       * [bugfix]
       * 描述：当`rx=10，ry=0`时，MS Edge下显示为`rx=10、ry=10`的效果。但是，谷歌能正常显示`rx=10、ry=0`的效果。
       * 解决：限制当`rx && ry`，2者均为数字时，才进行赋值。
       */
      // rx、ry必须都为数字才能赋值。
      rx && ry && (_radius = { rx, ry });
    }

    return (
      <rect x={x} y={y} width={width} height={height}
        {..._radius}
        style={_style}
        {...others}
      />
    );
  }
}
