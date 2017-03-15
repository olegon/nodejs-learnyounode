const fs = require('fs')

const [,,path,extension] = process.argv

fs.readdir(path, (err, files) => {
    if (err) throw err

    files
        .filter(file => file.endsWith(`.${extension}`))
        .forEach(file => console.log(file))
})
