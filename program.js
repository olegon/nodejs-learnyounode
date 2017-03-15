const http = require('http')
const fs = require('fs')

const [,,port] = process.argv

const server = http.createServer((req, res) => {
    if (req.method !== 'POST') return res.end('Send me a POST!')

    const chunks = []

    req.on('data', chunk => {
        chunks.push(chunk)
    })

    req.on('end', () => {
        res.writeHead(200, {
            'content-type': 'text/plain'
        })

        res.end(chunks.map(chunk => chunk.toString()).join('').toUpperCase())
    })
});

server.listen(Number(port))

/*

    Dica: poderia ser usado o módulo through2-map.

    const map = require('through2-map')
    { ... }
    req
    .pipe(map(chunk => chunk.toString().toUpperCase()))
    .pipe(res)

*/