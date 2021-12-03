const polka = require("polka");
const server = polka();
const HTML = `
<html>
    <body>
        <h1>
            Hallo
        </h1>
    </body>
</html>`;

server.get("/", function handler(req, res) {

    res.end(HTML);

});//end server.use

server.listen(8080, () => console.log("This server is good. Much connect to http://localhost:8080"));

