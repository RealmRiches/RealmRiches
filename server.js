const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

// Serve static files (HTML, CSS, JS) from the current folder
app.use(express.static(__dirname));

// Serve index.html when user visits "/"
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Socket.IO logic
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg); // broadcast to all users
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
