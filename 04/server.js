const polka = require("polka");
const sirv = require("sirv");
const app = polka();
const assets = sirv("public");

//sirv is similar to something in polka that does some Express.js
//sirv is middleware
//Is static asset server wrapped in middleware logic (middleware)

function logger(req, res, next) {

    console.log("Request:", req.method, req.url);
    console.log("Headers:", req.headers);
    console.log("Dat bod:", req.body);
    next();
}//end logger

app.use(logger, assets);

app.listen(8080, console.log("Very good. http://localhost:8080"));