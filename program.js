const fs = require('fs')

const [,,filename] = process.argv

fs.readFile(filename, 'utf8', (err, contents) => {
    if (err) throw err

    const lines = contents.split('\n').length - 1;

    console.log(lines)
})
