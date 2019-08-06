const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Chat = require('./models/Chat');

// mongoose.connect('mongodb://localhost:27017/chatbox', { useNewUrlParser: true });
// const mongodb = mongoose.connection;

mongoose.connect('mongodb://admin:admin123@ds155695.mlab.com:55695/chatbox', { useNewUrlParser: true })
.then(console.log('connected'))
.catch(err=>console.log('not connected',err));
const mongodb = mongoose.connection;

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

dotenv.config({
    path: '../.env',
});

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

users = [];
connections = [];

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })

io.sockets.on('connection', (socket) => {

    Chat.find({},(err,data) => {
        if(err){
            throw(err)
        }
        socket.emit('load chat', data)
    })

    connections.push(socket);
    console.log(`connected: ${connections.length} connected`);

    socket.on('disconnect', (data) => {
        users.splice(users.indexOf(socket.userName ), 1);
        updateUsernames();
        connections.splice(connections.indexOf(socket), 1);
        console.log(`disconnected: ${connections.length} connected`);
    });
    socket.on('send message', (data) => {
        var newChat = new Chat({message: data, name:socket.userName});
        newChat.save( )
        io.sockets.emit('new message', {message: data, name: socket.userName})
    });
    socket.on('new user', (data) => {
        socket.userName = data;
        users.push(socket.userName );
        updateUsernames();
    });

    function updateUsernames() {
        io.sockets.emit('get users', users )
    }
}) 

server.listen(10000, () => (
    console.log('Magic happens on port 10000')
));

module.exports = app;