'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const WhyOurProducts = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fade-in', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-[#FAFAF3] py-12 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10"
    >
      {/* Left Text Column */}
      <div className="max-w-xl text-center lg:text-left space-y-8 fade-in">
        <button className="px-4 py-1 border border-gray-400 rounded-full text-sm text-gray-700">
          🌿 Why Our Products
        </button>

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          YOUR SKIN DESERVES <br /> THE BEST CARE.
        </h2>

        <p className="text-gray-600 text-base md:text-lg">
          Discover a curated collection of skincare products designed to rejuvenate,
          protect, and pamper your skin. Explore our range crafted with love backed
          by science, and inspired by nature.
        </p>

        <div className="space-y-6">
          {[
            {
              title: 'Bio Ingredients',
              desc: 'Get naturally beautiful skin from within as our bio ingredients ensure it’s healthy, radiant skin.',
            },
            {
              title: 'Everything Natural',
              desc: 'Pure ingredients for pure skin. The perfect solution for your skin’s wellness.',
            },
            {
              title: 'All Handmade',
              desc: 'Made with love and care. Just for you. Give your skin the tender loving care it deserves.',
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 fade-in">
              <div className="text-xl font-semibold text-gray-500 w-8">0{i + 1}</div>
              <div>
                <h4 className="text-lg font-medium text-gray-800">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image Column */}
      <div className="relative fade-in">
        <img
          src="/Jun 15, 2025, 11_52_20 PM 2.svg"
          alt="Skincare Model"
          className="rounded-xl w-full max-w-sm object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full shadow text-sm font-medium text-gray-700">
          🏆 Best Skin Care Product Award-Winning
        </div>
      </div>
    </section>
  )
}

export default WhyOurProducts
