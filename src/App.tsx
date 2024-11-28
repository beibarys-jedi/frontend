import { useState } from "react";
import Register from "./pages/Register";
import "./App.css";
import egov from "./assets/egov.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={egov} className="logo" alt="Vite logo" />
        </a>
      </div>
      <div>
        <Register />
        <br />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
