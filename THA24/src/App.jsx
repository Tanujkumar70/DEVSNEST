import "./App.css";
import { createContext, useState } from "react";
import { Routing, Linking } from "./Routing";

const LoginContext = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const authentication = {
    login: login,
    setLogin: () => {
      setLogin(!login);
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <Linking />
      </nav>

      <LoginContext.Provider value={authentication}>
        <Routing />
      </LoginContext.Provider>
    </div>
  );
}

export default App;
export { LoginContext };
