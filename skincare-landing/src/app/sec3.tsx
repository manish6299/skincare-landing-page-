'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const products = [
  {
    name: 'ALYA SKIN CLEANSER.',
    price: 'FROM $29.99',
    image: '/cierra-henderson-LWIQp-0_b98-unsplash 1.svg',
  },
  {
    name: 'RITUAL OF SAKURA.',
    price: 'FROM $27.99',
    image: '/filip-knezevic-k-ElrinXWAk-unsplash 2.svg',
  },
  {
    name: 'THE BODY LOTION.',
    price: 'FROM $19.99',
    image: '/skin_care_beauty_cosmetic_packaging_design_agency_mumbai_delhi_bangalore_india 4.svg',
  },
]

const categories = ['NEW ARRIVAL', 'CLEANSING', 'ACNE FIGHTER', 'ANTI AGGING']

function ProductGallery() {
  return (
    <div className="min-h-screen bg-[#FAFAF0] px-4 py-12 md:px-16">
      <h1 className="text-3xl md:text-4xl text-center font-semibold text-gray-800 mb-4">
        Feel Beautiful Inside and Out<br />with Every Product.
      </h1>

      <div className="flex justify-center gap-3 mb-12 mt-6 flex-wrap">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`px-5 py-2 rounded-full text-sm font-medium border ${
              idx === 0 ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 relative"
          >
            <div className="relative h-[360px]">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-3xl"
              />
            </div>
            <div className="p-4 flex justify-between items-center">
              <div>
                <h3 className="font-medium text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.price}</p>
              </div>
              <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6h13.4M7 13L5.4 5M9 21a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ProductGallery