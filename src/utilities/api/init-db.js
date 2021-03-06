const { getAll } = require("../query-helper");

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("employees.db");

const buildSchema = () => {
  db.serialize(function () {
    db.run(
      "create table if not exists employees (id INTEGER PRIMARY KEY AUTOINCREMENT, firstName TEXT, lastName Text, status int DEFAULT 1)"
    );
  });
};

const countQuery = () => {
  return getAll(db, "select COUNT(*) as count from employees;");
};

const seedData = () => {
  countQuery().then((rows) => {
    let count = rows[0].count;
    if (count === 0) {
      // will make sure to seed data if no employees found.
      db.serialize(function () {
        var stmt = db.prepare("INSERT INTO employees VALUES (?,?,?,?)");
        for (var i = 0; i < 10; i++) {
          stmt.run(null, "firstName " + i, "lastName " + i, i);
        }
        stmt.finalize();
      });
    }
  });
};
buildSchema();
seedData();
module.exports = db;
