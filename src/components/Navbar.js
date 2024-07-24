import React from 'react';
import Avatar from '@mui/material/Avatar';
import logoImages from '../imgs/img1.png'; 

const Navbar = () => {
  return (
    <header className="header">
     <div className="nav">
    </div>

      <div className="profile">
        <img src={logoImages} alt="شعار" className="profile-image" />
        <span className="profile-name">My Portfolio</span>
      </div>
      <div className="logo">
        <Avatar className="logo-image">P</Avatar>
        <div className="logo-text">
          <span className="logo-name">Mohamad F Ghosn</span>
          <br />
          <span className="logo-title">Programmer</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;