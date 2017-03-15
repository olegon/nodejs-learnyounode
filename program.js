const http = require('http')

const [,,url] = process.argv

http.get(url, (response) => {
    let text = ''

    response.setEncoding('utf8')

    response.on('data', chunk => {
        text += chunk
    })

    response.on('end', () => {
        console.log(text.length)
        console.log(text)
    })

    response.on('error', console.error)
})
.on('error', console.error)