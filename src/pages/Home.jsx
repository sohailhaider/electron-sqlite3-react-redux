import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createNewEmployee,
  fetchAllEmployees,
  deleteEmployee,
  updateEmployee
} from "../store/features/employeesSlice";

const Home = () => {
  const employees = useSelector((state) => state.employees.employees);
  const dispatch = useDispatch();
  console.log(employees);
  useEffect(() => {
    dispatch(fetchAllEmployees());
    dispatch(
      createNewEmployee({
        firstName: "Sohail",
        lastName: "Haider",
        status: 1,
      })
    );
    dispatch(deleteEmployee(1));
    dispatch(updateEmployee({id: 3, firstName: "haider"}));

  }, []);
  return <div>This is React Home</div>;
};

export default Home;
