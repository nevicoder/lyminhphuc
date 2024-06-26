import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bio from "./Bio";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";
import Photos from "./Photos";
import styles from "./Content.module.scss";
function Content() {
  return (
    <Routes>
      <Route path="/" element={<Bio />} />
      <Route path="/bio" element={<Bio />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/photos" element={<Photos />} />
    </Routes>
  );
}

export default Content;
