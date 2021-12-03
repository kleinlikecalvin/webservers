const http = require("http");
const server = http.createServer();

server.on("request", function handler(req, res) {

    res.end("<html><body><h1>Hello</h1></body></html>");
});//end server.on

server.listen(8080, () => console.log("Connect to the server on http://localhost:8080"));

