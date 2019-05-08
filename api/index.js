const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyparser = require('body-parser');
require("dotenv").config(); //env
require('./models/authentication');
require('./models/chat')
const rateLimit = require("express-rate-limit");
const mongoDBErrors = require("mongoose-mongodb-errors");var cors = require('cors')
app.use(cors())
app.options('*', cors());

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'example.com');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}


var http = require('http').Server(app);
var io = require('socket.io')(http);

// mongoose connect in mongodb database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.mongourl);
mongoose.plugin(mongoDBErrors);

// bodyparser
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// routes
var routes = require('./routers/routers'); //importing route
routes(app); //register the route

// errors middleware
app.use((req, res, next) => {
    req.status = 404;
    const error = new Error("Routes Not Found");
    next(error);

});
// erroe handler
app.use((error, req, res, next) => {
    res.status(req.status || 500).send({
        success:false,
        data: {
        },
        message: error.message
    })
});

io.on('connection', function (socket) {
    console.log("connection");
    socket.on('chat message11', function (msg) {
        io.emit('chat message', msg);
    });
    socket.on('chat message12', function (msg) {
        io.emit('chat message121', msg);
    });
});

// port number
app.listen(3029, () => {
    console.log("http//:localhost:3029");

})
