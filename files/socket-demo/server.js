const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files (like HTML, CSS) from 'public' folder
app.use(express.static('public'));

// Handle connection from clients
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('message', (msg) => {
    console.log('Message:', msg);
    io.emit('message', msg); // Broadcast to all connected clients
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

let messageHistory = [];
let users = {};

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('A user connected');
  
  // Send message history to the new user
  socket.emit('message_history', messageHistory);

  socket.on('message', (msg) => {
    messageHistory.push(msg);
    io.emit('message', msg);   // Broadcast to all clients
  });

  socket.on('private_message', (data) => {
    io.to(data.to).emit('message', `Private message from ${data.from}: ${data.message}`);
  });

  socket.on('join', (username) => {
    users[socket.id] = username;
    console.log(username + ' joined the chat');
    io.emit('message', `${username} has joined the chat`);
  });

  socket.on('disconnect', () => {
    const username = users[socket.id];
    console.log(username + ' disconnected');
    io.emit('message', `${username} has left the chat`);
  });
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

