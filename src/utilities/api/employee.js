const { getAll } = require("../query-helper");
const db = require("./init-db");

const getAllEmployees = () => {
  return getAll(db, "SELECT * from employees");
};

const createEmployee = ({ id, firstName, lastName, status }) => {
  return db.run(
    `INSERT INTO employees(id, firstName, lastName, status) VALUES (?, ?, ?, ?)`,
    [id, firstName, lastName, status]
  );
};

const deleteEmployee = (id) => {
  db.run(`DELETE FROM employees WHERE id=?`, [id]);
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
