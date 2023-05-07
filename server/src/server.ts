import * as WebSocket from "ws";
import { Client } from "./client/Client";
import { ClientManager } from "./client/ClientManager";

const server = new WebSocket.Server({ port: 3000 });
const clientManager = new ClientManager();

server.on("connection", (socket: WebSocket) => {
  clientManager.addClient(new Client(socket));
});

console.info("Server Launch...");
