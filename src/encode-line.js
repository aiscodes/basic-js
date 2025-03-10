const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(s) {
  // throw new NotImplementedError('Not implemented');
  let x = 1;    
  let result = '';
  for(let i=0; i < s.length; i++){
      if(s[i] === s[i+1]){
          x += 1;
      } else {
          result += x+s[i];
          x = 1;
      }
  }
  return result.replace(/1/g, '');
}

module.exports = {
  encodeLine
};
