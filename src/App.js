import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Blogs from './components/Blogs';
import Navbar from './components/Navbar';
import Admin from './admin/Admin';
import Skills from './components/Skills';
import Project from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Modal from './components/Modal'; // Import the Modal component

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/admin" component={Admin} />
        <Route path="/skills" component={Skills} />
        <Route path="/project" component={Project} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <button className="open-modal-button" onClick={openModal}>
        ❤️
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <iframe
          src="https://aichatbot.sendbird.com/playground/index.html?app_id=F4C3EDDC-7AD2-4E9A-9A5E-2C39C232E7E5&bot_id=onboarding_bot&region=us-3"
          title="ChatBot"
        ></iframe>
      </Modal>
      <Footer />
    </Router>
  );
}

export default App;
