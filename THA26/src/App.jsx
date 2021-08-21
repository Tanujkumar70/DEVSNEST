import "./App.css";
import { user, email } from "./action";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const u = useSelector((state) => state.u);
  const e = useSelector((state) => state.e);
  const dispatch = useDispatch();
  return (
    <div className="App">
      }
      <div class="min-h-screen bg-purple-400 flex flex-col justify-center items-center">
        <div class="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
        <div class="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
        <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
          <div>
            <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">
              Create An Account
            </h1>
          </div>
          <br />
          <label>Username</label>
          <input
            class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            type="text"
            placeholder="username"
            onChange={(e) => {
              dispatch(user(e.target.value));
            }}
          />
          <br />
          <label>Email</label>
          <input
            type="text"
            class="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
            placeholder="xyz@gmail.com"
            onChange={(e) => {
              dispatch(email(e.target.value));
            }}
          />
        </div>

        <div class="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
          <h2 class="text-3xl font-bold text-center mb-4 cursor-pointer">
            Show the value
          </h2>
          <span class="text-purple-700 text-opacity-75 ...">
            Username:
            <br />
            {u}
          </span>
          <br />
          <span class="text-purple-700 text-opacity-75 ...">
            Email:
            <br />
            {e}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
