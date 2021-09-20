import React from "react";
// import { runDb } from "../utilities/api/user";
const remote = window.require("@electron/remote");
const db = remote.getGlobal("db");
const Home = () => {
  db.employee.getAllEmployees().then((value) => console.log(value));
  // remote.getGlobal("db").runDb();
  return <div>This is React Home</div>;
};

export default Home;
