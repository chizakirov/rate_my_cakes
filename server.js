const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const routes = require('./server/routes.js'); 
const port = 1111;


app.use(bodyParser.json());
app.use(express.static(__dirname + './server'));
app.use(express.static( __dirname + '/public/dist/public' ));


routes(app); //keep it all the way at the bottom!

app.listen(port, () => console.log("listening on port", port));