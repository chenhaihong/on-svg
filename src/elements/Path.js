/**
 * path属性:
 * d: 路径
 * style: fill、stroke统一放到style里面
 */


import React from 'react';
import styleMerge from '../helper/styleMerge';

export default class Path extends React.Component {
  render() {
    const {
      d,
      fill,   // 内部填充
      stroke, // 边框
      style,  // 自定义样式
      ...others
    } = this.props;
    const _style = styleMerge(fill, stroke, style); // 存放fill、stroke与自定义样式
    let _d = '';

    if (Array.isArray(d)) {
      _d = d.join(' ');
    } else if (typeof d === 'string') {
      _d = d;
    }

    return (
      <path d={_d} style={_style} {...others} />
    );
  }
}

/**
 * path中`d属性中的命令字母`对应单词的说明
 * 大写表示绝对定位，小写表示相对定位
 * 
 * [M] x y             = moveto              移动到指定坐标，xy分别为x轴和y轴的坐标点，类似画笔的起点。`path中的起点，必须存在`
 * [L] x y             = lineto              在初始位置（M 画的起点）和xy确定的坐标画一条线。
 * [H] x               = horizontal lineto   沿着x轴移动一段位置。
 * [V] y               = vertical lineto     沿着y轴移动一段位置。
 * [C] x1 y1 x2 y2 x y = curveto             三次贝塞尔曲线。
 *                                           当前点为起点，x、y为终点，起点和x1、y1控制曲线起始的斜率，终点和x2、y2控制结束的斜率。
 * [S] x2 y2 x y       = smooth curveto    简化的贝塞尔曲线。
 *                                         1.如果S命令跟在一个C命令或者另一个S命令的后面，它的第一个控制点，就会被假设成前一个控制点的对称点。
 *                                         2.如果S命令单独使用，前面没有C命令或者另一个S命令，那么它的两个控制点就会被假设为同一个点。
 * [Q] x1 y1 x y = quadratic Bézier curveto  二次贝塞尔曲线。
 *                                           只需要一个控制点，用来确定起点和终点的曲线斜率。因此它需要两组参数，控制点和终点坐标。
 * [T] x y = smooth quadratic Bézier curveto Q命令的简写命令。与S命令相似，T也会通过前一个控制点，推断出一个新的控制点。
 *                                           1.T命令前面必须是一个Q命令，或者是另一个T命令。
 *                                           2.如果T单独使用，那么控制点就会被认为和终点是同一个点，所以画出来的将是一条直线。
 * [A] rx,ry x-axis-rotation large-arc-flag sweep-flag x,y = elliptical arcto
 *   `rx` 指所在椭圆的水平半轴大小。
 *   `ry` 指所在椭圆的竖直半轴大小。
 *   `x-axis-rotation` 指椭圆的X轴与水平方向顺时针方向夹角。可以想像成一个水平的椭圆绕中心点顺时针旋转`x-axis-rotation`的角度。
 *   `large-arc-flag`  只有两个值，1表示大角度弧线，0为小角度弧线。
 *   `sweep-flag`      只有两个值，确定从起点至终点的方向，1为顺时针，0为逆时针。
 *   `x y`             是终点坐标。
 * [Z] = closepath                           从当前位置到起点画一条直线闭合。
 */

// 小写表示相对定位
Path.moveTo = function (x, y) { return `m ${x} ${y}` };
Path.lineTo = function (x, y) { return `l ${x} ${y}` };
Path.horizontalLineto = function (x) { return `h ${x}` };
Path.verticalLineto = function (y) { return `v ${y}` };
Path.curveTo = function (x1, y1, x2, y2, x, y) { return `c ${x1} ${y1} ${x2} ${y2} ${x} ${y}` };
Path.smoothCurveto = function (x2, y2, x, y) { return `s ${x2} ${y2} ${x} ${y}` };
Path.quadraticBezierCurveTo = function (x1, y1, x, y) { return `q ${x1} ${y1} ${x} ${y}` };
Path.smoothQuadraticBezierCurveTo = function (x, y) { return `t ${x} ${y}` };
Path.ellipticalArcTo = function (rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y) { return `a ${rx} ${ry} ${xAxisRotation} ${largeArcFlag} ${sweepFlag} ${x} ${y}` };
Path.closePath = function () { return `z` };

// 大写表示绝对定位
Path.MoveTo = function (x, y) { return `M ${x} ${y}` };
Path.LineTo = function (x, y) { return `L ${x} ${y}` };
Path.HorizontalLineto = function (x) { return `H ${x}` };
Path.VerticalLineto = function (y) { return `V ${y}` };
Path.CurveTo = function (x1, y1, x2, y2, x, y) { return `C ${x1} ${y1} ${x2} ${y2} ${x} ${y}` };
Path.SmoothCurveto = function (x2, y2, x, y) { return `S ${x2} ${y2} ${x} ${y}` };
Path.QuadraticBezierCurveTo = function (x1, y1, x, y) { return `Q ${x1} ${y1} ${x} ${y}` };
Path.SmoothQuadraticBezierCurveTo = function (x, y) { return `T ${x} ${y}` };
Path.EllipticalArcTo = function (rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y) { return `A ${rx} ${ry} ${xAxisRotation} ${largeArcFlag} ${sweepFlag} ${x} ${y}` };
Path.ClosePath = function () { return `Z` };