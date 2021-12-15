'use strict'

module.exports = (name, options) => {
  options = Object.assign({}, options)

  console.log(name)
  return `${name}@${options.host || 'tyy.me'} `
}
