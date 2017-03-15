const [,,...args] = process.argv

const sum = args
    .map(t => Number(t))
    .reduce((p, c) => p + c, 0)

console.log(sum)
