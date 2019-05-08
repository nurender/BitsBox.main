var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/user', function (req, res) {

    res.sendFile(__dirname + '/user.html');
})
app.get('/main', function (req, res) {

    res.sendFile(__dirname + '/main.html');
})

io.on('connection', function (socket) {
    socket.on('chat message11', function (msg) {
        io.emit('chat message', msg);
    });
    socket.on('chat message12', function (msg) {
        io.emit('chat message121', msg);
    });
});

http.listen(80, '192.168.1.124', () => {
    console.log('listening on *:3000');
});
