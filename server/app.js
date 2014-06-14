var express     = require("express"),
    bodyParser  = require("body-parser"),
    serveStatic = require("serve-static");

var app = express();

app.set('port', process.env.PORT || 3000);

// Parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// Set static file directory
app.use(serveStatic("../client"));

// Get forms of template
// Upload image for template
// Get form
// Get template

console.log("Listening to port: " + app.get('port'));

app.listen(app.get('port'));

