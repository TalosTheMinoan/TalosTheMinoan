// Require the necessary modules
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// Create an Express app
const app = express();
const server = http.createServer(app);

// Create a Socket.IO server
const io = socketIO(server);

// Serve static files from the "public" directory
app.use(express.static('public'));

// Handle Socket.IO connections
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle new messages
  socket.on('chat message', (message) => {
    console.log('Received message:', message);

    // Broadcast the message to all connected clients
    io.emit('chat message', message);
  });

  // Handle disconnections
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
const port = process.env.PORT || 3000; // Use the environment port if available
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
