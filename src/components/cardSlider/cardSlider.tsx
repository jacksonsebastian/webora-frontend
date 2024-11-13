/* eslint-disable import/no-extraneous-dependencies */
import 'swiper/css';
import 'swiper/css/autoplay';

import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const services = [
  {
    title: 'Custom Website',
    description: 'Tailored website solutions',
    image: 'https://cdn-icons-png.flaticon.com/512/3063/3063585.png',
  },
  {
    title: 'Single-Page Website',
    description: 'Fast, interactive sites',
    image: 'https://cdn-icons-png.flaticon.com/512/1046/1046899.png',
  },
  {
    title: 'Figma to HTML',
    description: 'Convert designs to code',
    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png',
  },
  {
    title: 'PSD to HTML',
    description: 'Pixel-perfect conversions',
    image: 'https://cdn-icons-png.flaticon.com/512/732/732273.png',
  },
  {
    title: 'SEO Optimization',
    description: 'Boost search rankings',
    image: 'https://cdn-icons-png.flaticon.com/512/159/159578.png',
  },
  {
    title: 'Web App Development',
    description: 'Scalable, secure apps',
    image: 'https://cdn-icons-png.flaticon.com/512/4175/4175261.png',
  },
  {
    title: 'Full-Stack Development',
    description: 'Complete web solutions',
    image: 'https://cdn-icons-png.flaticon.com/512/1040/1040203.png',
  },
  {
    title: 'E-commerce Website',
    description: 'Build online stores',
    image: 'https://cdn-icons-png.flaticon.com/512/3081/3081558.png',
  },
  {
    title: 'UI/UX Design',
    description: 'Engaging interfaces',
    image: 'https://cdn-icons-png.flaticon.com/512/1040/1040200.png',
  },
  {
    title: 'Speed Optimization',
    description: 'Faster performance',
    image: 'https://cdn-icons-png.flaticon.com/512/584/584649.png',
  },
  {
    title: 'Admin Dashboard',
    description: 'Data management',
    image: 'https://cdn-icons-png.flaticon.com/512/1043/1043500.png',
  },
  {
    title: 'API Integration',
    description: 'Extend features',
    image: 'https://cdn-icons-png.flaticon.com/512/1043/1043464.png',
  },
  {
    title: 'Progressive Web Apps',
    description: 'Native experiences',
    image: 'https://cdn-icons-png.flaticon.com/512/1156/1156282.png',
  },
  {
    title: 'Responsive Design',
    description: 'Mobile-friendly',
    image: 'https://cdn-icons-png.flaticon.com/512/6062/6062642.png',
  },
  {
    title: 'CMS Development',
    description: 'Content updates',
    image: 'https://cdn-icons-png.flaticon.com/512/204/204074.png',
  },
];

const CardSlider = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="glassmorphism-container flex items-center space-x-4 rounded-lg p-2">
              <img
                src={service.image}
                alt={service.title}
                className="size-12 rounded-lg"
              />
              <div>
                <p className="text-lg text-primary-500">{service.title}</p>
                <p className="text-sm text-primary-400">
                  {service.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .glassmorphism-container {
          backdrop-filter: blur(60px); /* Stronger blur for glass effect */
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.2); /* Light border */
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1); /* Smoother easing */
          position: relative; /* Ensure this is a stacking context */
          z-index: 1; /* Bring the card above the background */
        }

        .glassmorphism-container:hover {
          border: 1px solid #854cff; /* Change border color on hover */
        }
      `}</style>
    </>
  );
};

export default CardSlider;
