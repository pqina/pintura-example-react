import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Example from "./Example";
import ExampleDefaults from "./ExampleDefaults";
import ExampleModal from "./ExampleModal";
import ExampleOverlay from "./ExampleOverlay";
import ExampleFilePond from "./ExampleFilePond";
import ExampleVideo from "./ExampleVideo";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Pintura Image Editor</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Example</Link>
            </li>
            <li>
              <Link to="/defaults">Defaults</Link>
            </li>
            <li>
              <Link to="/modal">Modal</Link>
            </li>
            <li>
              <Link to="/overlay">Overlay</Link>
            </li>
            <li>
              <Link to="/filepond">FilePond</Link>
            </li>
            <li>
              <Link to="/video">Video</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/modal" element={<ExampleModal />}></Route>
          <Route path="/overlay" element={<ExampleOverlay />}></Route>
          <Route path="/filepond" element={<ExampleFilePond />}></Route>
          <Route path="/defaults" element={<ExampleDefaults />}></Route>
          <Route path="/video" element={<ExampleVideo />}></Route>
          <Route path="/" element={<Example />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
