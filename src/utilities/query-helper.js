const getAll = (db, query) => {
  return new Promise((resolve, reject) => {
    db.all(query, function (err, rows) {
      if (err) reject(err);
      resolve(rows);
    });
  });
};
const getOne = (db, query) => {
  return new Promise((resolve, reject) => {
    db.select(query, function (err, rows) {
      if (err) reject(err);
      resolve(rows);
    });
  });
};

module.exports = {
  getAll,
  getOne
};
