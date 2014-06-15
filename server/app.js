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
  database: 'formjam',
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

app.get("/template/:id/forms", function(req, res) {
  console.log("foobar");
});

/**
 * Upload image for template
 */

app.post("/form/:id/upload", function(req, res) {
  console.log(req.body);
  console.log(req.files);
});

app.post("/templates", function(req, res) {
  var title = req.body.title || "Untitled";
  var config = JSON.stringify(req.body.config);
  conn.query('INSERT INTO template SET ?', {
    title: title,
    config: config
  }, function(err, result) {
    if (err) {
      res.json(400, {msg: 'Signup failed'});
      return;
    }
    res.json(200, {msg: 'win'});
  });
});

app.get("/templates", function(req, res) {
  conn.query('SELECT * FROM template', function(err, results) {
    if (err) {
      res.json(400, {msg: 'Signup failed'});
      return;
    }
    res.json(200, results);
  });
});


console.log("Listening to port: " + app.get('port'));
app.listen(app.get('port'));

