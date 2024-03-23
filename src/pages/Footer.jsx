import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-r from-blue-400 via-purple-300 to-indigo-500">
        <div className="grid grid-cols-4 gap-4 p-4 ">
          <div className="">
            <div>Health</div>
          </div>
          <div>
            <div>Hospitailzation</div>
          </div>
          <div >
            <div>About</div>
          </div>
          <div>Follow Us</div>
        </div>
      </div>
      <div className="footer-arch"></div>
    </div>
  );
};

export default Footer;
