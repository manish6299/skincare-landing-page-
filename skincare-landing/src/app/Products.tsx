'use client';
import React, { useRef, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaShoppingCart } from 'react-icons/fa';

const products = [
  {
    title: 'ALYA SKIN CLEANSER.',
    price: 'FROM $29.99',
    image: '/cierra-henderson-LWIQp-0_b98-unsplash 1.svg',
  },
  {
    title: 'RITUAL OF SAKURA.',
    price: 'FROM $27.99',
    image: '/filip-knezevic-k-ElrinXWAk-unsplash 2.svg',
  },
  {
    title: 'THE BODY LOTION.',
    price: 'FROM $19.99',
    image: '/skin_care_beauty_cosmetic_packaging_design_agency_mumbai_delhi_bangalore_india 4.svg',
  },
  {
    title: 'NATURAL FACE MASK.',
    price: 'FROM $24.99',
    image: '/skin_care_beauty_cosmetic_packaging_design_agency_mumbai_delhi_bangalore_india 4.svg',
  },
];

const Products = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = window.innerWidth < 768 ? 220 : 300;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          intervalRef.current = setInterval(() => scroll('right'), 3000);
        } else {
          if (intervalRef.current) clearInterval(intervalRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F5F5EE] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Arrows */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
          <h2 className="inline-flex items-center border border-[#2F3E3D] rounded-full px-4 py-2 text-[#2F3E3D] text-[16px] font-medium bg-[#F5F5EE]">
            <span className="w-3 h-3 bg-[#2F3E3D] rounded-full mr-2"></span>
            Best Selling Products
          </h2>

          <h2 className="text-center md:text-left text-xl sm:text-2xl md:text-3xl font-medium text-gray-800">
            Skincare That Brings Out <br className="hidden md:block" /> Your Natural Radiance
          </h2>

          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-200 active:scale-95 transition duration-200"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 active:scale-95 transition duration-200"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Products Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-2 hide-scrollbar"
        >
          {products.map((p, i) => (
            <div
              key={i}
              className="group min-w-[240px] sm:min-w-[260px] md:min-w-[280px] lg:min-w-[300px] flex-shrink-0 bg-white rounded-2xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="bg-[#F9F9F7] px-4 py-3 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">{p.title}</h3>
                  <p className="text-xs text-gray-500">{p.price}</p>
                </div>
                <button className="bg-white border p-2 rounded-full hover:bg-gray-100 transition">
                  <FaShoppingCart size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Hero Banner Section */}
        <div className="mt-16 relative rounded-xl overflow-hidden">
          <img
            src="/ChatGPT Image Jun 16, 2025, 01_32_50 AM 1.svg"
            alt="Hero banner"
            className="w-full h-[300px] sm:h-[340px] md:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end justify-center px-4 pb-8 text-center text-white">
            <div>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-wide leading-snug mb-4 drop-shadow-md">
                Feel Beautiful Inside and Out <br className="hidden sm:block" />
                with Every Product.
              </h3>
              <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
