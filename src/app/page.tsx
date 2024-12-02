"use client"

import Image from "next/image";
import bgImage from '@/app/images/bg-image.png';
import Header from "./components/Header";
import PageContent from "./components/PageContent";

import { useEffect, useState } from "react";
export default function Home() {

  const [isImageVisible, setIsImageVisible] = useState(true);

  // Function to handle window resize
  const handleResize = () => {
    if (window.innerWidth < 1024) { // Adjust the width based on your requirements
      setIsImageVisible(false);
    } else {
      setIsImageVisible(true);
    }
  };

  useEffect(() => {
    // Set initial visibility on mount
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);
    
    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative flex flex-col w-full h-[738px] bg-[#F8F8FD]">
      {/* Container for the background image */}
      <div className={`absolute right-0 top-0 lg:block transition-opacity duration-500 ${isImageVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Image 
          src={bgImage} 
          alt="Background" 
          width={800} 
           // Use layout="fill" to fill the parent div
          objectFit="cover" // Ensure the image covers the container
          className="z-[-1]" // Keep it behind other content
        />
      </div>
      {/* Other content */}
      <div className="relative z-10 flex flex-col bg-transparent">
        <Header />
        <PageContent />
        
      </div>
      
      
    </div>
  );
}
