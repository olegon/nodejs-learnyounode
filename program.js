const http = require('http')

const [,,...urls] = process.argv
const results = []
let done = 0;

function find(index, urls, results) {
    const url = urls[index];

    http.get(url, (response) => {
        let text = ''

        response.setEncoding('utf8')

        response.on('data', chunk => {
            text += chunk
        })

        response.on('end', () => {
            results[index] = text;
            
            if (++done == urls.length) {
                results.forEach(result => console.log(result))
            }
        })

        response.on('error', console.error)
    })
    .on('error', console.error)
}

for (let i = 0; i < urls.length; i++) {
    find(i, urls, results)
}

