import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';

export default function Navbar() {
  return (
    <div id="navbar">
      <div id="site-logo">
        <AiOutlineTwitter
          style={{
            height: '3rem',
            width: '3rem',
          }}
        />
      </div>
      <div id="site-menu">
        <nav>
          <a href="#a">Notifications</a>
          <a href="#a">Messages</a>
          <a href="#a">Profile</a>
          <a href="#a">Settings</a>
        </nav>
      </div>
      <div className="navbar-account">
        <img alt="" src="" />
        <div className="navbar-account-details">
          <h3>name</h3>
          <h6>account_name</h6>
        </div>
      </div>
    </div>
  );
}
