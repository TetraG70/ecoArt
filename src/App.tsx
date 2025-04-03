import { Routes, Route } from "react-router-dom"; // ✅ Use Routes instead of Router
import Home from "./Pages/Home";
import Foundation from "./Pages/Foundation";
import Journey from "./Pages/Journey";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/journey" element={<Journey />} />
      <Route path="/foundation" element={<Foundation />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
