const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  let holder = [];
  for(let i=0; i<options.repeatTimes; i++) {
    if(!options.additionSeparator){
            holder.push(str+'+');
    }else if(options.additionSeparator){
      holder.push(str)
    }

  }
  const result = holder.join('')
  return result.slice(0, result.length-1);
}

module.exports = {
  repeater
};
