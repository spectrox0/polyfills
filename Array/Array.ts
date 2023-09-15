/* eslint-disable no-extend-native */

Array.prototype.mapFilter = function MapFilter(callback, condition) {
  const result = [];
  for (let index = 0; index < this.length; index += 1) {
    if (condition(this[index as number], index, this)) {
      result.push(callback(this[index as number], index, this));
    }
  }
  return result;
};
