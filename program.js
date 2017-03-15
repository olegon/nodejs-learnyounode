const fs = require('fs')

const [,,filename] = process.argv

const contents = fs.readFileSync(filename).toString()
const lines = contents.split('\n').length - 1;

console.log(lines)