const http = require('http')

const server = http.createServer((req, res) => {
    res.end(req.url)
})

server.listen(3333)

const client = http.get('http://127.0.0.1:3333', (res) => {
    res.pipe(process.stdout)
})