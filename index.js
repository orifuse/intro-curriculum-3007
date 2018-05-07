'use strict';

/**
 * 整数が17で割り切れるとき、trueを返す
 * @param {number} num
 * @return {boolean} 
 */
function isMultipleOfSeventeen(num) {
  return num % 17 === 0;
}

module.exports = {
  isMultipleOfSeventeen: isMultipleOfSeventeen
}
