import React, { useContext } from "react";
import { LoginContext } from "./App";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const user = useContext(LoginContext);
  return (
    <>
      {user.login ? (
        <>
          <h1 style={{ margin: "10px" }}>Dashboard section</h1>
          <h2>Private for Logged in users</h2>
        </>
      ) : (
        <Redirect to="/"></Redirect>
      )}
      <button
        style={{ margin: "10px", fontSize: "1.2rem" }}
        onClick={user.setLogin}
      >
        {user.login ? "Logout" : "Login"}
      </button>
    </>
  );
};

export default Dashboard;
