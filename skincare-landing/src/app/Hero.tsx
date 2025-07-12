'use client'
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const textRef = useRef<HTMLParagraphElement>(null)
  const skincareRef = useRef<HTMLHeadingElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading screen
    const timer = setTimeout(() => {
      setIsLoading(false)

      // Reveal animation timeline
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

      tl.fromTo(
        '.hero-text',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 }
      )
        .fromTo(
          '.hero-title',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2 },
          '-=0.8'
        )
        .fromTo(
          '.hero-image',
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1 },
          '-=0.8'
        )
    }, 1500)

    // Word-by-word darkening animation
    if (textRef.current) {
      const words = textRef.current.innerText.split(' ')
      textRef.current.innerHTML = words
        .map((word) => `<span class="word inline-block opacity-20">${word}</span>`)
        .join(' ')

      gsap.fromTo(
        textRef.current.querySelectorAll('.word'),
        { opacity: 0.2 },
        {
          opacity: 1,
          stagger: 0.08,
          duration: 0.5,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }

    // Parallax effect on "SKINCARE"
    if (skincareRef.current) {
      gsap.to(skincareRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: skincareRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-[999] bg-[#f3f8e8] flex items-center justify-center transition-opacity duration-1000 ease-in-out">
          <div className="animate-pulse text-gray-800 font-semibold text-xl">
            Loading...
          </div>
        </div>
      )}

      <section className="relative bg-[#f3f8e8] px-4 sm:px-6 md:px-20 py-16 sm:py-20 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          {/* Left: Text + Button */}
          <div className="w-full md:w-1/3 text-left flex flex-col items-start gap-4 sm:gap-6 md:gap-8 text-gray-800">
            <p
              ref={textRef}
              className="hero-text text-sm text-gray-600 max-w-xs sm:max-w-sm md:max-w-xs"
            >
              Transform your skincare routine with premium products that restore,
              protect, and enhance your natural glow every day.
            </p>
            <button className="bg-gray-800 text-white px-6 py-3 sm:py-4 rounded-full text-sm hover:bg-red-800 transition-all">
              Shop Now
            </button>
          </div>

          {/* Center: GLOW NATURALLY */}
          <div className="w-full md:w-1/3 text-center">
            <h2 className="hero-title text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              GLOW <br /> NATUR-<span className="inline-block">ALLY</span>
            </h2>
          </div>

          {/* Right: Product Image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <Image
              src="/skin_care_beauty_cosmetic_packaging_design_agency_mumbai_delhi_bangalore_india 4.svg"
              alt="Product"
              width={150}
              height={150}
              className="hero-image rounded-xl shadow-md w-[100px] sm:w-[130px] md:w-[150px] h-auto"
            />
          </div>
        </div>

        {/* Model Image with Quote */}
        <div className="flex flex-col items-center mt-12 sm:mt-16 relative z-20 px-4 sm:px-0">
          <div className="w-full flex justify-center">
            <Image
              src="/ChatGPT Image Jun 15, 2025, 10_24_47 PM 3.svg"
              alt="Skincare model"
              width={450}
              height={1200}
              className="rounded-xl object-cover w-full max-w-[450px] h-auto"
            />
          </div>
          <div className="absolute bottom-6 sm:bottom-6 bg-[#f3f8e8] rounded-full px-4 sm:px-6 py-3 shadow-md text-base flex items-center gap-3 sm:gap-4 w-[90%] sm:w-[400px] h-[auto] sm:h-[80px]">
            <Image
              src="/skin_care_beauty_cosmetic_packaging_design_agency_mumbai_delhi_bangalore_india 4.svg"
              alt="Product Icon"
              width={60}
              height={60}
              className="rounded-full object-cover w-[50px] sm:w-[75px] h-[50px] sm:h-[75px]"
            />
            <span className="text-gray-800 font-medium text-sm sm:text-[15px] hover:shadow-2xl hover:scale-105">
              While giving you an invigorating cleansing experience.
            </span>
          </div>
        </div>

        {/* Parallax Background Text */}
        <h1
          ref={skincareRef}
          className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 text-[20vw] font-black text-[#2D3B36] opacity-100 text-center leading-none select-none break-words whitespace-normal z-0"
        >
          SKINCARE
        </h1>
      </section>
    </div>
  )
}

export default Hero
