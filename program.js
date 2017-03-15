const http = require('http')
const url = require('url')

const [,,port] = process.argv

const server = http.createServer((req, res) => {
    /* 2nd parameter: parseQueryString = true */
    const parsedUrl = url.parse(req.url, true)

    if (parsedUrl.pathname === '/api/parsetime') {
        const isoString = parsedUrl.query.iso

        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify(dateObject(isoString), null, 4))
    }
    else if (parsedUrl.pathname === '/api/unixtime') {
        const isoString = parsedUrl.query.iso

        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify(dateUnix(isoString), null, 4))
    }
    else {
        res.writeHead(404, { 'content-type': 'text/plain' });
        res.end('Available endpoints: /api/parsetime and /api/unixtime')
    }    
});

function dateObject(isoString) {
    const date = new Date(isoString)

    return {
        'hour': date.getHours(),
        'minute': date.getMinutes(),
        'second': date.getSeconds()
    }
}

function dateUnix(isoString) {
    const date = new Date(isoString)

    return {
        'unixtime': date.getTime()
    }
}

server.listen(Number(port))