const socketIO = require('socket.io');
const fs = require('fs');
const txtToJson = require('./utils/txtToJson');
const path = require('path');

const socket = {};

const connect = (server) => {
    socket.io = socketIO(server);

    socket.io.on("connection", socket => {
        fs.readFile(path.join(__dirname, 'db', 'valores.txt'), (err, data) => {

            const results = txtToJson(data.toString());

            socket.emit("FromAPI", results);
            watch();
        });
    })
}

const watch = () => {
    fs.watch(path.join(__dirname, 'db', 'valores.txt'), (eventType, filename) => {
        fs.readFile(path.join(__dirname, 'db', 'valores.txt'), (err, data) => {

            const results = txtToJson(data.toString());

            socket.io.emit("FromAPI", results);
        });
    })
}

module.exports = {
    connect,
    socket
}