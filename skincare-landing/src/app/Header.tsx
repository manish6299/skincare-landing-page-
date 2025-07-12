'use client'
import React from 'react'
import { FiShoppingCart, FiHeart, FiUser } from 'react-icons/fi'

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 md:px-16 py-6 bg-[#f3f8e8] text-gray-800">
      {/* Left: Logo */}
      <h1 className="text-xl md:text-2xl font-bold tracking-wide">SKINCARE</h1>

      {/* Center: Navigation */}
      <nav className="hidden md:flex gap-8 text-sm font-medium">
        <a href="#" className="hover:text-black transition-colors">All Products</a>
        <a href="#" className="hover:text-black transition-colors">Serum</a>
        <a href="#" className="hover:text-black transition-colors">Sunscreen</a>
        <a href="#" className="hover:text-black transition-colors">Bundle</a>
      </nav>

      {/* Right: Icons */}
      <div className="flex items-center gap-4 text-sm">
        <div className="bg-[#f8fbe9] p-2 rounded-full">
          <FiShoppingCart className="w-5 h-5" />
        </div>
        <div className="bg-[#f8fbe9] p-2 rounded-full">
          <FiHeart className="w-5 h-5" />
        </div>
        <div className="bg-[#f8fbe9] p-2 rounded-full">
          <FiUser className="w-5 h-5" />
        </div>
      </div>
    </header>
  )
}

export default Header
