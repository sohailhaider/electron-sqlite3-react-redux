import React from "react";
// import { runDb } from "../utilities/api/user";
const remote = window.require('@electron/remote');
const Home = () => {
  console.log("remote", remote.getGlobal("db"))
  // remote.getGlobal("db").runDb();
  return <div>This is React Home</div>;
};

export default Home;
