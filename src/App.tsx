import React from 'react';
import FlightGlobe from './components/FlightGlobe';
import TeamSection from './components/TeamSection';
import Navbar from './components/Navbar';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar />
      
      <section id="home" className="hero-section">
        <FlightGlobe />
      </section>
      
      <section id="team" className="content-section">
        <TeamSection />
      </section>
    </div>
  );
};

export default App;
