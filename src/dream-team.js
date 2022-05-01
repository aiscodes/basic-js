const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  let name = ''
  let arr = []
  if (members instanceof Array) {
    members.map((el) => {
      if (typeof el == 'string') arr.push(el.split(' ').join('').toUpperCase())
    })
    const a = arr.sort()
    a.map((el) => {el.length !==0 ? name += el[0] : name= false })
  }
  return name
}

module.exports = {
  createDreamTeam,
}
