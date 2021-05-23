const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path')
const cors = require('cors')
require('dotenv').config();

const app = express();
const PORT = 5000;
const PORT2 = 5001; 

server = app.listen(PORT2, () => {
    console.log(`Socket_IO is listening on port: ${PORT2}`);
})

const io = require("socket.io")(server, {
    cors: {
      origin: "*",
    },
  });

//Socket IO

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

io.on("connection", (socket) => {
    console.log(`Client ${socket.id} connected`);
  
    // Join a conversation
    const { roomId } = socket.handshake.query;
    socket.join(roomId);
  
    // Listen for new messages
    socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
      io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
    });
  
    // Leave the room if the user closes the socket
    socket.on("disconnect", () => {
      console.log(`Client ${socket.id} diconnected`);
      socket.leave(roomId);
    });
});

// End of Socket IO


const postitsRouter = require('./routes/postits.js')
const usersRouter = require('./routes/login.js')

let PASSWORD = process.env.PASSWORD
const MONGODB_URI = `mongodb+srv://Daru:${PASSWORD}@clustercurated-4syco.azure.mongodb.net/full-stack-server?retryWrites=true&w=majority`
// MONGODB_URI ||
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('tiny'))
app.use('/api/postits', postitsRouter)
app.use('/api/users', usersRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})