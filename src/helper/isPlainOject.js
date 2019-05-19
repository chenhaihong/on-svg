/**
 * [TODO] 检测`o`是否是纯数据对象
 * @param {Object} o 
 * @returns {Boolean} 检测结果
 */
export default function isPlainObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}