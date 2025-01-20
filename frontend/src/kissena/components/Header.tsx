import React from 'react';
import { KissenaTheme } from './theme'; 
import './theme.module.css';
import logo from './logo1.png';

const Header: React.FC = () => {
  return (
    <header 
      className="header"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#0D1608',
        borderBottom: `1px solid ${KissenaTheme.colors.neonGreen[7] || '#609D37'}`,

      }}
    >
      <div className="logo-container" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Kissena Synergy Logo" style={{ width: '88px', height: '88px', marginRight: '16px' }} />
        <div className="brand-name" style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="kissena" style={{ color: '#B8F000', fontSize: '30px', fontWeight: '700' }}>Kissena</span>
          <span className="synergy" style={{ color: '#F6790A', fontSize: '30px', fontWeight: '700' }}>Synergy</span>
        </div>
      </div>
      <nav className="nav" style={{ display: 'flex', gap: '20px' }}>
        <a href="#announcements" style={{ color: '#FFF4B9', fontSize: '20px', fontWeight: '600', textDecoration: 'none', padding: '5px', transition: 'color 0.3s ease' }}>Announcements</a>
        <a href="#events" style={{ color: '#FFF4B9', fontSize: '20px', fontWeight: '600', textDecoration: 'none', padding: '5px', transition: 'color 0.3s ease' }}>Events</a>
        <a href="#learn-more" style={{ color: '#FFF4B9', fontSize: '20px', fontWeight: '600', textDecoration: 'none', padding: '5px', transition: 'color 0.3s ease' }}>Learn More</a>
      </nav>
    </header>
  );
};

export default Header;
