import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/About.js';
import HowItWorks from './pages/HowItWorks.js';
import MembershipPage from './pages/Membership.js';
import RoleSelection from './pages/RoleSelection.js'; 
import ClientEnterDetails from './pages/ClientEnterDetails'; 

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/select-role" element={<RoleSelection />} /> 
        <Route path="/client-enter-details" element={<ClientEnterDetails />} /> 
      </Routes>
    </div>
  );
}

export default App;


