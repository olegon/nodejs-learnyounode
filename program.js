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

/*

    Dica: uma solução é via módulo 'bl'

    const bl = require('bl')
    {...}
    response.pipe(bl((err, data) => {
      if (err) return console.error(err)

      const dataStr = data.toString()

      console.log(dataStr.length)
      console.log(dataStr)
    }))

*/