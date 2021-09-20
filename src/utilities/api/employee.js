const { getAll } = require("../query-helper");
const db = require("./init-db");

const getAllEmployees = () => {
  return getAll(db, "SELECT * from employees");
};

const createEmployee = ({ id, firstName, lastName, status }) => {
  return db.run(
    `INSERT INTO employees(id, firstName, lastName, status) VALUES (?, ?, ?, ?)`,
    [id, firstName, lastName, status],
    () => {
      console.log("inserterd");
    }
  );
};

const deleteEmployee = (id, cb) => {
  db.run(`DELETE FROM employees WHERE id=?`, [id], (err, results) => {
    console.log(err, results);
  });
};

const updateEmployee = (id, { firstName, lastName, status }) => {
  db.run(
    `UPDATE employees
  SET firstName = ?,
  lastName = ?,
  status = ?
  WHERE id = ?;`,
    [firstName, lastName, status, id]
  );
};

module.exports = {
  getAllEmployees,
  createEmployee,
  deleteEmployee,
  updateEmployee,
};
