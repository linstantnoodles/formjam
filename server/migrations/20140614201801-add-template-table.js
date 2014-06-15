var dbm = require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable("template", {
    id: {
      type: "int",
      primaryKey: true,
      autoIncrement: true
    },
    title: "string",
    config: "string",
    user_id: "int"
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable("template", callback);
};
