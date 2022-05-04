const chalk = require('chalk')

const getPrimaryText = (text) => chalk.bgBlueBright.whiteBright(text)

const getErrorText = (text) => chalk.bgWhiteBright.red(text)

module.exports = {
  getPrimaryText,
  getErrorText,
}
