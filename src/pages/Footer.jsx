import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto flex flex-col justify-center  md:flex-row md:justify-between">
        <div className="md:w-1/4 md:ml-3">
          <h2 className="text-xl font-semibold mb-4 text-gray-200">About Us</h2>
          <p className="text-sm text-justify text-gray-300">
            healthcare professionals connect with patients, provide valuable information, and showcase their services.
            conducting check-ups, diagnosing diseases, prescribing medications, providing treatments, collaborating with healthcare teams, and staying updated with medical advancements.
          </p>
        </div>
        <div className="md:w-1/3 mt-6 md:mt-0">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="list-none">
            <li><a href="#" className="text-sm hover:text-gray-400">Home</a></li>
            <li><a href="#" className="text-sm hover:text-gray-400">About</a></li>
            <li><a href="#" className="text-sm hover:text-gray-400">Services</a></li>
            <li><a href="#" className="text-sm hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
        <div className="md:w-1/3 mt-6 md:mt-0">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-sm">123 Street Name</p>
          <p className="text-sm">City, Country</p>
          <p className="text-sm">email@example.com</p>
          <p className="text-sm">+123 456 7890</p>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-8 pt-4 flex flex-col md:flex-row md:justify-between items-center">
        <p className="text-sm text-center md:text-left md:ml-3">
          &copy; 2024 Your Website. All rights reserved. | Designed with ❤️ by dolly
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0 mr-3">
          {/* Add social media icons */}
          <a href="#" className="text-white hover:text-gray-400"><FacebookIcon/></a>
          <a href="#" className="text-white hover:text-gray-400"><XIcon/></a>
          <a href="#" className="text-white hover:text-gray-400"><InstagramIcon/></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
