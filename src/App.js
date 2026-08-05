import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import KCPavements from './pages/KCPavements';
import Calculator from './pages/Calculator';
import ContactPage from './pages/ContactPage';
import PavoChat from './components/PavoChat';
import CityAdmin from './components/CityAdmin';
import './index.css';

function App() {
  const [bypassMode, setBypassMode] = useState(localStorage.getItem('bypassMode') === 'true');
  const [adminPassword, setAdminPassword] = useState(null);
  const [cities, setCities] = useState([]);
  const [showCityAdmin, setShowCityAdmin] = useState(false);

  useEffect(() => {
    localStorage.setItem('bypassMode', bypassMode);
  }, [bypassMode]);

  const handleBypassToggle = (status) => {
    setBypassMode(status);
    if (!status) {
      setAdminPassword(null);
      setShowCityAdmin(false);
    }
  };

  return (
    <Router>
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navigation bypassMode={bypassMode} showCityAdminTab={bypassMode && adminPassword} onCityAdminClick={() => setShowCityAdmin(true)} />
        
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pavements" element={<KCPavements />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Pavo Chat */}
        <PavoChat bypassMode={bypassMode} onBypassChange={handleBypassToggle} onAdminAuth={setAdminPassword} adminAuthed={adminPassword} />

        {/* City Admin Modal */}
        {showCityAdmin && bypassMode && adminPassword && (
          <CityAdmin onClose={() => setShowCityAdmin(false)} />
        )}
      </div>
    </Router>
  );
}

export default App;
