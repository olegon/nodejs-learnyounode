const fs = require('fs')

module.exports = function (path, extension, callback) {
    return fs.readdir(path, (err, files) => {
        if (err) return callback(err)

        const filteredFiles = files.filter(file => file.endsWith(`.${extension}`))

        callback(err, filteredFiles)
    })
}

