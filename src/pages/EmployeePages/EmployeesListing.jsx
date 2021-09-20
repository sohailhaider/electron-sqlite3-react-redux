import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteEmployee,
  fetchAllEmployees,
} from "../../store/features/employeesSlice";

const EmployeesListing = ({ setEditUser }) => {
  const employees = useSelector((state) => state.employees.employees);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllEmployees());
  }, []);
  const deleteEmployeeRecord = (id) => {
    if (confirm("This is delete the record, do you want to proceed?")) {
      dispatch(deleteEmployee(id));
    }
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={`employee-record-${index}`}>
            <td>{employee.id}</td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.status ? "Active" : "Inactive"}</td>
            <td>
              <Button variant="link" onClick={() => setEditUser(employee)}>
                Edit
              </Button>
              <Button
                variant="link"
                onClick={() => deleteEmployeeRecord(employee.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default EmployeesListing;
