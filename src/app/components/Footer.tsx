"use client"; // Ensure this is present

import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 w-full">
      <div className="mx-48 max-w-screen-xl flex flex-col sm:flex-row justify-between">
        <div className="mb-6 sm:mb-0">
          <h2 className="text-xl font-semibold mb-2">About Us</h2>
          <p className="text-gray-400">
            JobHive connects you with the best employers and helps you find your dream job.
          </p>
        </div>

        <div className="mb-6 sm:mb-0">
          <h2 className="text-xl font-semibold mb-2">Links</h2>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-yellow-500">Home</a></li>
            <li><a href="/find-jobs" className="hover:text-yellow-500">Find Jobs</a></li>
            <li><a href="/about" className="hover:text-yellow-500">About Us</a></li>
            <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
          </ul>
        </div>

        <div className="mb-6 sm:mb-0">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p className="text-gray-400">Email: info@jobhive.com</p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
        </div>

        <div className="mb-6 sm:mb-0 flex space-x-4">
          <a href="#" className="hover:text-yellow-500">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="hover:text-yellow-500">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-yellow-500">
            <FaLinkedinIn size={24} />
          </a>
          <a href="#" className="hover:text-yellow-500">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} JobHive. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
