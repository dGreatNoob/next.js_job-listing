"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import HiveIcon from '@/app/images/jobHuntly-icon.png';
import { Menu, X } from 'lucide-react';

// Define the props type for the Navigation component
interface NavigationProps {
  activePage: 'jobs' | 'companies'; // specify the possible values for activePage
}

const Navigation: React.FC<NavigationProps> = ({ activePage }) => {
  return (
    <nav className="hidden md:flex space-x-4 pt-0.5 font-medium font-epilogue">
      <Link href="/jobs">
        <button
          className={`bg-transparent text-gray-600 py-2 px-4 border-b-4 transition duration-300 ${
            activePage === 'jobs'
              ? 'border-[#4640DE] text-[#4640DE]'
              : 'border-transparent hover:border-[#4640DE] hover:text-[#4640DE]'
          }`}
        >
          Find Jobs
        </button>
      </Link>
      <Link href="/companies">
        <button
          className={`bg-transparent text-gray-600 py-2 px-4 border-b-4 transition duration-300 ${
            activePage === 'companies'
              ? 'border-[#4640DE] text-[#4640DE]'
              : 'border-transparent hover:border-[#4640DE] hover:text-[#4640DE]'
          }`}
        >
          Browse Companies
        </button>
      </Link>
    </nav>
  );
};

// Define the props type for the Header component
interface HeaderProps {
  className?: string; // Optional className prop
  activePage: 'jobs' | 'companies'; // specify the possible values for activePage
}

const Header: React.FC<HeaderProps> = ({ className = '', activePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`bg-transparent w-full min-w-1 h-[78px] ${className}`}>
      <div className="flex flex-row justify-between items-start h-full mx-52 my-4">
        <div className='flex flex-row items-center gap-8 pt-1'>
          <div className="flex items-center">
            <Image src={HiveIcon} alt="JobHuntly Logo" width={25} height={25} />
            <Link href="/" className="text-xl font-bold ml-2 text-gray-800 font-red-hat">JobHuntly</Link>
          </div>

          {/* Desktop Navigation */}
          <Navigation activePage={activePage} />
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/login" className="text-blue-600 hover:text-blue-800 font-bold font-epilogue">
            Login
          </Link>
          <div className="h-9 border-l border-gray-300" />
          <Link href="/signup">
            <button className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition duration-300 font-epilogue">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden pt-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[78px] right-20 bg-white shadow-md z-50">
          <nav className="flex flex-col p-4 items-center">
            <Link href="/jobs" className="text-gray-600 hover:text-blue-600 py-2">
              Find Jobs
            </Link>
            <Link href="/companies" className="text-gray-600 hover:text-blue-600 py-2">
              Browse Companies
            </Link>
            <Link href="/login" className="text-blue-600 hover:text-blue-800 font-bold font-epilogue py-2">
              Login
            </Link>
            <Link href="/signup" className="py-2">
              <button className="bg-blue-600 text-white px-4 py-2 w-full hover:bg-blue-700 transition duration-300 font-epilogue">
                Sign Up
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
