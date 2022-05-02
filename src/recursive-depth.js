const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth( array ) {
    throw new NotImplementedError('Not implemented');
    // let count = 1;
    // for (let index = 0; index < array.length; index++) {
    //   const element = array[index];
    //   if (Array.isArray(element)) {
    //     count += 1;
    //     getDepth(element);
    //   }
    // }
    // return count;
}
}

module.exports = {
  DepthCalculator
};
