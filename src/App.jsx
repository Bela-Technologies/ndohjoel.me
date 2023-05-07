import "./styles/header/NavBar.scss";
import "./styles/Style.scss";
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Recognitions from "./pages/Recognitions";

function App() {
  return (
    <div className="siteWrapper">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="recognitions" element={<Recognitions />} />
          <Route path="about-me" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
