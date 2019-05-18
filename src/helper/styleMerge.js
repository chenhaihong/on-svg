/**
 * 合并填充、边框及自定义样式
 * @param {Object|null|undefined} fill 填充样式对象
 * @param {Object|null|undefined} stroke 边框样式对象
 * @param {Object|null|undefined} style 风格样式对象
 * @returns {Object} 一个合并后的样式对象
 */
export default function styleMerge(fill, stroke, style) {
  let _style = {}; // 存放fill、stroke与自定义样式

  // 合并填充样式的逻辑
  if (Object.prototype.toString.call(fill) === '[object Object]') {
    const {
      color: fillColor = 'none',
      opacity: fillOpacity,
    } = fill;
    fillColor && (_style.fill = fillColor);
    (fillOpacity || fillOpacity === 0) && (_style.fillOpacity = fillOpacity);
  } else if (typeof fill === 'string') {
    _style.fill = fill;
  }

  // 合并stroke样式的逻辑
  if (Object.prototype.toString.call(stroke) === '[object Object]') {
    const {
      color: strokeColor,
      width: strokeWidth,
      linecap: strokeLinecap,
      dasharray: strokeDasharray,
      opacity: strokeOpacity,
    } = stroke;
    if (strokeColor) {
      _style.stroke = strokeColor;
      // [bugfix]：当有颜色、但是没有边框宽度时，浏览器会默认将宽度设为1。
      // 这行代码，修正了这个问题。在这种情况下，将宽度设为0。
      !strokeWidth && (_style.strokeWidth = 0);
    }
    strokeWidth && (_style.strokeWidth = strokeWidth);
    strokeDasharray && (_style.strokeDasharray = strokeDasharray);
    strokeLinecap && (_style.strokeLinecap = strokeLinecap);
    strokeOpacity && (_style.strokeOpacity = strokeOpacity);
  } else if (typeof stroke === 'string') {
    _style.stroke = stroke;
  }

  // 合并自定义style属性的逻辑
  // react的处理style属性时，它必须是一个Object，所以这里不用验证
  style && (_style = { ..._style, ...style });

  return _style;
}