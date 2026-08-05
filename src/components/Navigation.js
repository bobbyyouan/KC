import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHardHat, FaBars, FaTimes } from 'react-icons/fa';

function Navigation({ bypassMode, showCityAdminTab, onCityAdminClick }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav style={{
      backgroundColor: '#1a1a1a',
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '3px solid #ff8c00',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <FaHardHat size={32} color="#ff8c00" />
        <h1 style={{ color: '#ff8c00', margin: 0, fontSize: '20px' }}>KC Pave Analysis</h1>
        <span style={{ color: '#888', fontSize: '12px', marginLeft: '10px' }}>by Bobby Youan & Danny Will</span>
      </div>

      <div style={{
        display: mobileOpen ? 'flex' : 'none',
        flexDirection: 'column',
        position: 'absolute',
        top: '60px',
        right: '20px',
        backgroundColor: '#1a1a1a',
        padding: '20px',
        borderRadius: '8px',
        border: '2px solid #ff8c00',
        width: '200px',
        gap: '10px'
      }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', padding: '8px' }}>Home</Link>
        <Link to="/pavements" style={{ color: '#fff', textDecoration: 'none', padding: '8px' }}>KC Pavements</Link>
        <Link to="/calculator" style={{ color: '#fff', textDecoration: 'none', padding: '8px' }}>Calculator</Link>
        <Link to="/donate" style={{ color: '#ff8c00', textDecoration: 'none', padding: '8px', fontWeight: 'bold' }}>Donate</Link>
        {showCityAdminTab && <button onClick={onCityAdminClick} style={{ padding: '8px', cursor: 'pointer' }}>City Admin</button>}
        <Link to="/contact" style={{ color: '#fff', textDecoration: 'none', padding: '8px' }}>Contact</Link>
      </div>

      <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        <Link to="/pavements" style={{ color: '#fff', textDecoration: 'none' }}>KC Pavements</Link>
        <Link to="/calculator" style={{ color: '#fff', textDecoration: 'none' }}>Calculator</Link>
        <Link to="/donate" style={{ color: '#ff8c00', textDecoration: 'none', fontWeight: 'bold' }}>Donate</Link>
        {showCityAdminTab && <button onClick={onCityAdminClick} style={{ padding: '8px 16px', backgroundColor: '#ff8c00', color: '#000', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>City Admin</button>}
        <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
      </div>

      <button onClick={() => setMobileOpen(!mobileOpen)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer', display: 'none' }}>
        {mobileOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navigation;
