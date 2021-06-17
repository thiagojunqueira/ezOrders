const express = require('express');
const mongoose = require('mongoose')
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors')
require('dotenv/config')

const routes = require('./routes')

const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASS;
mongoose.connect(`mongodb+srv://${mongoUser}:${mongoPass}@cluster.xiqdu.mongodb.net/ezOrders?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

const app = express();
const server = http.Server(app);
const io = socketIo(server);

app.use( (request, response, next) => {
    request.io = io;
    next();
})
app.use(cors())
app.use(express.json());
app.use(routes);

server.listen(3001, () => console.log('Server Started > PORT 3001'))