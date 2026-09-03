const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  res.end(JSON.stringify({
    message: "Welcome to BlestDon's Docker Application!",
    status: "Application is running successfully",
    port: PORT
  }));
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("Node.js application running on port " + PORT);
});
