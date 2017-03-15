const http = require('http')
const fs = require('fs')

const [,,port,filename] = process.argv

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/plain'
    })

    fs.createReadStream(filename).pipe(res)
});

server.listen(Number(port))