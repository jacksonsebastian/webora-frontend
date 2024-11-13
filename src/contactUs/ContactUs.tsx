import Image from 'next/image';
import React from 'react';

import { Button } from '@/button/Button';
import { Section } from '@/layout/Section';

const ContactUs = () => {
  return (
    <div className="bg-black">
      <Section
        className="relative"
        title="Let’s Connect and Build Your Vision!"
        description="Have questions or ready to bring your project to life? We’re here to help every step of the way."
      >
        <div className="css-blurry-gradient-right !right-2"></div>
        <div className="css-blurry-gradient-left !left-2"></div>
        <div className="glassmorphism-container grid items-center p-6 lg:grid-cols-2 lg:p-8">
          <div className="relative mb-4 h-64 overflow-hidden rounded-md sm:h-80 md:h-96 lg:mb-0 lg:h-[500px] lg:w-3/4 xl:h-[600px]">
            <Image
              className="rounded-md"
              src="/assets/images/faq/faq.png"
              alt="Contact Us"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="glassmorphism-container  block w-full rounded-lg border p-2.5 text-sm text-primary-100 outline-none"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="glassmorphism-container  block w-full rounded-lg border p-2.5 text-sm text-primary-100 outline-none"
                placeholder="example@mail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="glassmorphism-container  block w-full rounded-lg border p-2.5 text-sm text-primary-100 outline-none"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="glassmorphism-container  block w-full rounded-lg border p-2.5 text-sm text-primary-100 outline-none"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <Button className="!rounded-lg !border-primary-400 !bg-primary-500 !px-5 !py-3 !text-sm !font-medium hover:!bg-transparent">
              Send Message
            </Button>
          </form>
        </div>
        <style jsx>{`
          .glassmorphism-container {
            z-index: 999;
            background: rgba(255, 255, 255, 3%);
            backdrop-filter: blur(60px); /* Stronger blur for glass effect */
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.2); /* Light border */
          }
        `}</style>
      </Section>
    </div>
  );
};

export default ContactUs;
