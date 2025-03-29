import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up">
        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Methu Islam</h2>
          <p className="text-gray-400 mt-2">Your trusted brand for quality products.</p>
          <p className="mt-4">Email: <a href="engmethu@gmail.com" className="text-blue-400">engmethu@gmail.com</a></p>
          <p>Phone: <a href="tel:+8801761654478" className="text-blue-400">+880 1761654478</a></p>
        </div>
        
        {/* Quick Links */}
        <div className="text-center">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-blue-400">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-400">Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="text-center">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl"><FaFacebook /></a>
            <a href="#" className="text-gray-400 hover:text-gray-500 text-2xl"><FaGithub /></a>
            <a href="#" className="text-gray-400 hover:text-pink-500 text-2xl"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-blue-300 text-2xl"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Methu Islam. All Rights Reserved.</p>
      </div>

      {/* Thank You Animation */}
      <div className="text-center mt-6 animate-bounce text-lg font-semibold text-blue-400" data-aos="fade-up">
        Thank You for Visiting! 😊
      </div>
    </footer>
  );
}

export default Footer;
