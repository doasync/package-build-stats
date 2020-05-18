// Use ES6 supported by Node v6.10 only!
const fs = require('fs')

module.exports = {
  tmp: fs.realpathSync(`${__dirname}/../files`),
}
