'use client';
import React, { useState } from 'react';

const faqs = [
  {
    question: 'Are your products safe for sensitive skin?',
    answer: 'Yes! All our products are tested and safe for every skin type, including sensitive skin.',
  },
  {
    question: 'Are your products cruelty-free?',
    answer: 'Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.',
  },
  {
    question: 'What’s your return policy?',
    answer: 'We accept returns within 30 days of purchase. Products must be unopened and in original condition.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship worldwide. Shipping costs and delivery times vary depending on the destination.',
  },
  {
    question: 'How do I choose the right product?',
    answer: 'You can use our product quiz or contact our 24/7 support team for recommendations tailored to your skin needs.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // second item open by default

  return (
    <section className="bg-[#FAFAF2] px-4 sm:px-6 py-10 sm:py-12 md:px-20 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Left Image Block */}
        <div className="w-full md:w-1/2 relative">
          <img
            src="mathilde-langevin-p3O5f4u95Lo-unsplash 1.svg" // Replace with your local image path
            alt="Skincare Product"
            className="w-full h-full rounded-xl shadow-md object-cover"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-2 flex items-center gap-2 text-sm shadow-md">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full" />
            24/7 We’re Here to Help You
          </div>
        </div>

        {/* Right FAQ Block */}
        <div className="w-full md:w-1/2">
          <div className="mb-4">
            <span className="text-sm border border-gray-300 rounded-full px-4 py-1 text-gray-700 inline-flex items-center gap-4">
              <span className="inline-block w-2 h-2 bg-green-700 rounded-full" />
              Frequently Asked Question
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-8 leading-tight">
            Answers to Your <br /> Skincare Questions, All <br /> in One Place.
          </h2>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div key={index} className="border border-gray-300 rounded-md transition-all">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex justify-between items-center w-full p-4 text-left font-medium text-gray-900"
                >
                  {item.question}
                  <span className="text-xl">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4 text-sm text-gray-600">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
