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
