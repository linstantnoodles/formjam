var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable("user", {
    id: {
      type: "int",
      primaryKey: true
    },
    email: "string",
    password: "string"
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable("user", callback);
};
