import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/blue">blue</Link>
          <Link to="/red">red</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<h1>Blue</h1>} />
            <Route path="/red" element={<h1>Red</h1>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
