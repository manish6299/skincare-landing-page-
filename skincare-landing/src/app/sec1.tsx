'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

const SkincareSection = () => {
  const sectionRef = useRef(null)
  const paragraphRef = useRef(null)

  // ...existing code...
  useEffect(() => {
    // Fade-in + slide-up on initial load
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }
    )

    if (!paragraphRef.current) return

    // Word-by-word animation on scroll
    const split = new SplitType(paragraphRef.current, {
      types: 'words',
      tagName: 'span',
    })

    gsap.set(split.words, { opacity: 0.2 })

    gsap.to(split.words, {
      opacity: 1,
      stagger: 0.05,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    })

    return () => {
      split.revert()
    }
  }, [])
// ...existing code...

  return (
    <section
      ref={sectionRef}
      className="bg-[#f7f8f2] px-4 sm:px-6 md:px-10 py-8 rounded-md text-[#333] max-w-screen-xl mx-auto my-10 shadow-lg transition-all duration-500 ease-in-out"
    >
      <div className="space-y-4 text-base sm:text-lg md:text-xl leading-relaxed">
        <p
          ref={paragraphRef}
          className="line font-medium"
        >
          Experience the ultimate in skincare with our expertly formulated products,
          crafted to nourish, protect, and rejuvenate your skin. Combining the finest
          <span className="font-semibold"> natural ingredients </span>
          with advanced science, our collection ensures every skin type can achieve a radiant,
          healthy glow. Embrace your beauty with confidence every day.
        </p>
      </div>
    </section>
  )
}

export default SkincareSection
