import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Red from "./components/Red.jsx";
import Blue from "./components/Blue.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/blue">blue</Link>
          <Link to="/">home</Link>
          <Link to="/red">red</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
