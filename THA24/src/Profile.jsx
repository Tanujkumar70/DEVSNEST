import React, { useContext } from "react";
import { LoginContext } from "./App";
import { Redirect } from "react-router-dom";

function Profile() {
  const user = useContext(LoginContext);
  return (
    <div>
      {user.login ? (
        <div>
          <h1>Hello! I am the Profile Page.</h1>
          <h2>I am only visible to private users</h2>
        </div>
      ) : (
        <Redirect to="/"></Redirect>
      )}
      <button className="btn btn-outline-primary btn-lg" onClick={user.set}>
        {user.login ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Profile;
