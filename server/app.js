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
app.use(multer({

  dest: './form-images',

  rename: function (fieldname, filename) {
    return filename.replace(/\W+/g, '-').toLowerCase() + Date.now()
  }
}));

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
  var id = req.params.id;
  var path = req.files.file.path;
  // Ideally from python script
  var content = {};
  content = JSON.stringify(content);

  conn.query('INSERT INTO form SET ?, date_submitted=NOW()', {
    content: content,
    image_uri: path,
    template_id: id
  }, function(err, result) {
    if (err) {
      res.json(400, {msg: 'Signup failed'});
      return;
    }
    res.json(200, {msg: 'win'});
  });
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
    console.log(results);
    res.json(200, results);
  });
});


console.log("Listening to port: " + app.get('port'));
app.listen(app.get('port'));

