'use client';
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-[#2E3A34] text-white px-4 sm:px-6 md:px-20 lg:px-40 pt-16 pb-24 overflow-hidden">
      {/* SKINCARE Background Text */}
      <div className="absolute bottom-[-4rem] left-0 right-0 flex justify-center opacity-10 pointer-events-none z-0">
        <h1 className="text-[22vw] font-extrabold leading-none tracking-tighter">SKINCARE</h1>
      </div>

      {/* Main Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Join The Skincare <br /> Community Now.
          </h2>
          <div className="flex justify-center md:justify-start space-x-6 text-sm text-gray-300">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center md:items-end justify-between space-y-6 text-center md:text-right">
          <div>
            <p className="text-sm text-gray-300">Get in Touch</p>
            <p className="text-lg font-semibold">contact.skincare.com</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-gray-300">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
