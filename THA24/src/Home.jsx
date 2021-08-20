import React, { useContext } from "react";
import { LoginContext } from "./App";

function Home() {
  const user = useContext(LoginContext);

  return (
    <div className="home">
      <h1>Hey! I am the home page.</h1>
      <h2>To access the Login section, please click the button below</h2>
      <button className="btn btn-outline-primary btn-lg" onClick={user.set}>
        {user.login ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Home;
