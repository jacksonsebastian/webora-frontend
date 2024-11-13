import React, { useState } from 'react';

import { Section } from '@/layout/Section';

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question:
        'Can you help me choose the right website features for my business?',
      answer:
        ' Absolutely! We start by understanding your specific goals and industry needs, allowing us to recommend features that will add the most value. Our packages are flexible and scalable, ensuring you get the right solutions for your requirements',
    },
    {
      question: 'Will my website be mobile-friendly and fast?',
      answer:
        'Yes! All our packages Essentials, Growth, and Startup include responsive design, ensuring your website looks great on all devices. We also prioritize speed optimization across all packages, so you can provide a seamless experience to your visitors.',
    },
    {
      question: 'What support do you offer after my website goes live?',
      answer:
        'We offer ongoing support for all packages. The Essentials package includes basic support, while our Growth and Startup packages come with enhanced support options, including maintenance and updates, to ensure your website stays current and functions smoothly.',
    },
    {
      question: 'How does each package help me achieve my business goals?',
      answer:
        'Each package is designed with specific goals in mind. The Essentials package helps establish a professional online presence, the Growth package focuses on attracting more visitors with SEO and advanced features, and the Startup package is tailored to create a custom solution that aligns perfectly with your unique objectives.',
    },
    {
      question: 'Is free hosting included with your packages?',
      answer:
        'Yes, all packages include free hosting for the 6 months! After the 6 months, we can guide you on affordable hosting options or continue managing your hosting for a low annual fee, ensuring your website remains secure and accessible.',
    },
  ];

  return (
    <div className="bg-black">
      <Section
        className="mb-0 py-2"
        title="Frequently Asked Questions"
        description="All You Need to Know About Our Services and How We Help You Succeed"
      >
        <div className="flex items-start justify-center">
          <div className="w-full sm:w-10/12 md:w-2/3">
            <ul className="flex flex-col">
              {faqs.map((faq, index) => (
                <li
                  key={index}
                  className="glassmorphism-container my-2 !rounded-md border shadow-lg"
                >
                  <h2
                    onClick={() => toggleAccordion(index)}
                    className="flex cursor-pointer flex-row items-center justify-between p-3 text-primary-100"
                  >
                    <span>{faq.question}</span>
                    <div>
                      <svg
                        className={`size-6 fill-current text-primary-500 transition-transform duration-500 ${
                          activeIndex === index ? 'rotate-180' : ''
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                      </svg>
                    </div>
                  </h2>
                  <div
                    className={`duration-400 overflow-hidden border-l-2 border-primary-500 transition-all ${
                      activeIndex === index ? 'max-h-screen' : 'max-h-0'
                    }`}
                  >
                    <p className="p-3">{faq.answer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <style jsx>{`
        .glassmorphism-container {
          backdrop-filter: blur(60px); /* Stronger blur for glass effect */
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.2); /* Light border */
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1); /* Smoother easing */
          z-index: 1; /* Bring the card above the background */
        }

        .glassmorphism-container:hover {
          transform: scale(1.02); /* Slightly more noticeable zoom */
          border: 1px solid #854cff; /* Change border color on hover */
        }
      `}</style>
    </div>
  );
};

export default FAQAccordion;
