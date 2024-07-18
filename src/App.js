import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Blogs from './components/Blogs';
import Navbar from './components/Navbar';
import Admin from './admin/Admin';
import Skills from './components/Skills';
import Project from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
     <Router>
      <Navbar/>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/project" element={<Project/>} />
        </Routes>
        <Footer/>
    </Router>
    </>
  );
}

export default App;
