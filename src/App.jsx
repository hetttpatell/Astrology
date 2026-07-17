import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Astrology from './pages/Astrology';
import Vaastu from './pages/Vaastu';
import Kathakar from './pages/Kathakar';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/astrology" element={<Astrology />} />
          <Route path="/vaastu" element={<Vaastu />} />
          <Route path="/kathakar" element={<Kathakar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
