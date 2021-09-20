import React from "react";
import { runDb } from "../utilities/api/user";

const Home = () => {
  runDb();
  return <div>This is React Home</div>;
};

export default Home;
