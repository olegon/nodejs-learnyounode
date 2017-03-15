const net = require('net')

const [,,port] = process.argv

const server = net.createServer(socket => {
    socket.end(formatDate(new Date()))
})

function formatDate(date) {
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    const hour = date.getHours()
    const minute = date.getMinutes()

    return `${year}-${padleft(month, '0', 2)}-${padleft(day, '0', 2)} ${padleft(hour, '0', 2)}:${padleft(minute, '0', 2)}\n`
}

function padleft(str, char, size) {
    let result = str.toString()

    while (result.length < size) result = char + result

    return result
}

server.listen(Number(port))