import React from 'react';

import { Button } from '@/button/Button';
import { Section } from '@/layout/Section';

const Pricing = () => {
  const planData = [
    {
      title: 'Essential',
      subtitle: 'For solo entrepreneur',
      description: 'A functional static website for elevating your business',
      price: '$99',
      features: [
        { name: 'Professional Home Page', included: true },
        { name: 'Responsive Design', included: true },
        { name: 'Booking or Scheduling Integration', included: false },
        { name: 'SEO Optimization', included: false },
        { name: 'Performance Optimization', included: false },
        { name: 'Technical Support', included: false },
      ],
    },
    {
      title: 'Growth',
      subtitle: 'For growing businesses',
      description: 'An advanced website with SEO and responsive design',
      price: '$299',
      features: [
        { name: 'Professional Home Page', included: true },
        { name: 'Responsive Design', included: true },
        { name: 'SEO Optimization', included: true },
        { name: 'Performance Optimization', included: true },
        { name: 'Booking or Scheduling Integration', included: false },
        { name: 'Technical Support', included: false },
      ],
    },
    {
      title: 'Startup',
      subtitle: 'Tailored solutions for startups',
      description:
        'A fully customized responsive website tailored to your brand',
      price: '$599',
      features: [
        { name: 'Professional Home Page', included: true },
        { name: 'Responsive Design', included: true },
        { name: 'SEO Optimization', included: true },
        { name: 'Performance Optimization', included: true },
        { name: 'Booking or Scheduling Integration', included: true },
        { name: 'Technical Support', included: true },
      ],
    },
  ];

  return (
    <div className="bg-black">
      <Section
        title="Simple pricing to level up your brand."
        description="Clear Pricing for All Business Types, Skilled Developers, Rapid Delivery, Flexibility Without Commitment."
      >
        <div className="relative gap-x-16 gap-y-4 lg:grid lg:grid-cols-3">
          <div className="css-blurry-gradient-center"></div>
          {planData.map((plan, index) => (
            <div
              key={index}
              className="glassmorphism-container mx-4 flex-col justify-center p-6 text-center"
            >
              <h3 className="mb-2 text-3xl font-semibold text-primary-500">
                {plan.title}
              </h3>
              <h4 className="text-1xl text-primary-100">{plan.subtitle}</h4>
              <p className="p-4">{plan.description}</p>

              <div className="flex items-baseline justify-center">
                <p className="text-5xl font-extrabold text-primary-300">
                  {plan.price}
                </p>
              </div>

              <div className="flex justify-center">
                <ul role="list" className="text- my-8 space-y-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      {feature?.included ? (
                        <svg
                          className="size-5 shrink-0 text-green-500 dark:text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          className="size-5 shrink-0 text-red-500 dark:text-red-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 5.293a1 1 0 011.414 0L10 9.586l4.293-4.293a1 1 0 011.414 1.414L11.414 11l4.293 4.293a1 1 0 01-1.414 1.414L10 12.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 11 4.293 6.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      )}
                      <span>{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button className="w-4/5 !rounded-lg !border-primary-400">
                Buy
              </Button>
            </div>
          ))}
        </div>
      </Section>
      <style jsx>{`
        .glassmorphism-container {
          backdrop-filter: blur(60px); /* Stronger blur for glass effect */
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.2); /* Light border */
          padding: 4%;
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1); /* Smoother easing */
          position: relative; /* Ensure this is a stacking context */
          z-index: 1; /* Bring the card above the background */
        }

        .glassmorphism-container:hover {
          transform: scale(1.07); /* Slightly more noticeable zoom */
          border: 1px solid #854cff; /* Change border color on hover */
        }
      `}</style>
    </div>
  );
};

export default Pricing;
