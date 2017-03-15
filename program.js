const mymodule = require('./mymodule')

const [,,path,extension] = process.argv

mymodule(path, extension, (err, files) => {
    if (err) return console.log(err)

    files.forEach(file => console.log(file))
})
