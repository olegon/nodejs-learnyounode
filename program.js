const http = require('http')

const [,,url] = process.argv

http.get(url, (response) => {
    response.setEncoding('utf8')

    response.on('data', console.log)

    response.on('error', console.error)
})
.on('error', console.error)