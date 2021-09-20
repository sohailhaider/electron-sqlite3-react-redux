import React from "react";
const remote = window.require("@electron/remote");
const db = remote.getGlobal("db");
const Home = () => {
  db.employee.createEmployee({
    firstName: "Sohail",
    lastName: "Haider",
    status: 1,
  });
  db.employee.getAllEmployees().then((value) => console.log(value));
  db.employee.deleteEmployee(2);
  db.employee.getAllEmployees().then((value) => console.log(value));
  return <div>This is React Home</div>;
};

export default Home;
