import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./views/Home";
import CV from "./views/cv";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
    
      </Routes>
    </>
  );
}

export default App;
