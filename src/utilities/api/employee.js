const db = require("./init-db");

const getAllEmployees = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT rowid AS id, info FROM lorem", function (err, rows) {
      if (err) reject(err);
      resolve(rows);
    });
  });
};

module.exports = { getAllEmployees };
