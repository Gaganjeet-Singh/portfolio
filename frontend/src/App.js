import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import Hero from "./Pages/Hero";
import About from './Pages/About';
// import Project from './pages/Project';
// import Contact from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
