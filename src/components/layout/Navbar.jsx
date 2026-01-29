import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-blue rounded-md flex items-center justify-center text-white font-bold">
            S
          </div>
          <span className="text-xl font-bold text-gray-800 tracking-tight">
            Softway
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-brand-blue transition">
            Home
          </a>
          <a href="#" className="hover:text-brand-blue transition">
            About Us
          </a>
          <a href="#" className="hover:text-brand-blue transition">
            Services
          </a>
          <a href="#" className="hover:text-brand-blue transition">
            Our Clients
          </a>
          <a href="#" className="hover:text-brand-blue transition">
            Blog
          </a>
          <a href="#" className="hover:text-brand-blue transition">
            Contact
          </a>
        </div>

        {/* Action Button */}
        <button className="bg-brand-blue text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
