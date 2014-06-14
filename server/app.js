var express     = require("express"),
    bodyParser  = require("body-parser"),
    serveStatic = require("serve-static"),
    multer      = require("multer"),
    mysql       = require("mysql");

/**
 * Connect to mysql server
 */

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root'
});

conn.connect();

/**
 * Create express application
 */

var app = express();

app.set('port', process.env.PORT || 3000);

/**
 * Parse request bodies
 */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(multer({dest: './form-images'}));

/**
 * Set static file directory
 */

app.use(serveStatic("../client"));

/**
 * Get forms of template
 */

app.get("template/:id/forms", function(req, res) {
  console.log("foobar");
});

/**
 * Upload image for template
 */

app.post("form/:id/upload", function(req, res) {
  console.log(req.body);
  console.log(req.files);
});

console.log("Listening to port: " + app.get('port'));
app.listen(app.get('port'));

