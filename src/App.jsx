import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./views/Home";
import About from "./views/About";
import Resume from "./views/Resume";
import Portafolio from "./views/Portafolio";

import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portafolio />} />
      </Routes>
    </>
  );
}

export default App;
