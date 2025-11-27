import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Servers from './pages/Servers';

function App() {
  return (
    <Router basename="/Resturant">
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/servers" element={<Servers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
