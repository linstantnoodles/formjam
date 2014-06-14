var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable("form", {
    id: {
      type: "int",
      primaryKey: true
    },
    date_submitted: "datetime",
    content: "string",
    image_uri: "string",
    template_id: "int"
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable("form");
};
