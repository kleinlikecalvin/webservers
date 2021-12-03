const polka = require("polka");
const sirv = require("sirv");
const app = polka();
const assets = sirv("public");

//sirv is similar to something in polka that does some Express.js
//Is static asset server wrapped in middleware logic (middleware)

app.use(assets);

app.listen(8080, console.log("Very good. http://localhost:8080"));