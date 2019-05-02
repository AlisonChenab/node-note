const net = require('net')

const PORT = 8989,
    HOST = '127.0.0.1'

const server = net.createServer(socket => {
    socket.on('data', data => {
        socket.write(data)
    })
    socket.on('close', () => {
        console.log('closed:', socket.remoteAddress, socket.remotePort)
    })
})

server.listen(PORT, HOST)

console.log(server instanceof net.Server)