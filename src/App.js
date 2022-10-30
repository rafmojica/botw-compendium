import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Compendium from "./pages/Compendium";
import Item from "./pages/Item";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/compendium" element={<Compendium />} />
          <Route path="/item/:id" element={<Item />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
