const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  // throw new NotImplementedError('Not implemented');
  season = '';
  if(date!==undefined){
    month = date.toString().slice(4,7)
    switch(month) {
        case 'Dec':
        // case 'december':
        // case '12':
        case 'Jan':
        // case 'january':
        // case '1':
        case 'Feb':
        // case 'february':
        // case '2':
            season = 'winter';
        break;
        case 'Mar':
        // case 'march':
        // case '3':
        case 'Apr':
        // case 'april':
        // case '4':
        case 'May':
        // case '5':
            season = 'spring';
        break;
        case 'Jun':
        // case 'june':
        // case '6':
        case 'Jul':
        // case 'july':
        // case '7':
        case 'Aug':
        // case 'august':
        // case '8':
            season = 'summer';
        break;
        case 'Sep':
        // case 'september':
        // case '9':
        case 'Oct':
        // case 'october':
        // case '10':
        case 'Nov':
        // case 'november':
        // case '11':
            season = 'fall';
        break;
    }
   
  }
  return season !== '' ? season : "Invalid date!"
}

module.exports = {
  getSeason
};
