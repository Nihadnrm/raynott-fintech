import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-8 px-6">
      
      {/* TOP GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-3">
            Raynott <span className="text-green-500">Fintech</span>
          </h2>
          <p className="text-gray-400">
            Secure digital finance solutions for a smarter tomorrow.
          </p>

          {/* Social Icons */}
          
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-4x00">
           <Link to={'/'}> <li className="hover:text-white cursor-pointer">Home</li></Link>
           <Link to={'/about'}>  <li className="hover:text-white cursor-pointer">About Us</li></Link>
            <Link to={'/services'}> <li className="hover:text-white cursor-pointer">Services</li></Link>
            <Link to={'/contact'}> <li className="hover:text-white cursor-pointer">Contact</li></Link>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Wallet Management</li>
            <li className="hover:text-white cursor-pointer">Loan Services</li>
            <li className="hover:text-white cursor-pointer">Money Transfer</li>
            <li className="hover:text-white cursor-pointer">Bill Payments</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-gray-400 mb-2">📍 Bengaluru, India</p>
          <p className="text-gray-400 mb-2">📞 +91 98765 43210</p>
          <p className="text-gray-400">📧 support@raynottfintech.com</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} Raynott Fintech. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
