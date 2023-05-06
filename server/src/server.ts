import * as WebSocket from "ws";

const server = new WebSocket.Server({ port: 3000 });
server.on("connection", (socket: WebSocket) => {
  console.info("Client connected.");

  socket.on("close", () => {
    console.info("Client disconnected.");
  })
});

console.info("Server Launch...");
