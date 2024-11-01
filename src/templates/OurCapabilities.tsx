// eslint-disable-next-line import/no-extraneous-dependencies
import { gsap } from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

import { Button } from '@/button/Button';
import { Section } from '@/layout/Section';

const OurCapabilities = () => {
  const capabilities = [
    'Custom Web Development',
    'Single-Page website',
    'Figma to HTML',
    'PSD to HTML',
    'SEO Optimization',
    'Web Application Development',
    'Full-Stack Development',
    'E-commerce Website Development',
    'UI/UX Design',
    'Speed Optimization',
    'Custom Admin Dashboard',
    'Third-Party API Integration',
    'API Integration Services',
    'Progressive Web Apps',
    'Mobile-Responsive Design',
    'CMS Website Development',
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const items = containerRef.current?.children;

    if (items) {
      // GSAP stagger animation with random movement and scaling
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: () => gsap.utils.random(-100, 100), // random starting Y position
          scale: 0.5,
          rotate: () => gsap.utils.random(-20, 20), // random rotation
        },
        {
          opacity: 1,
          y: 0, // bring it to its original position
          scale: 1,
          rotate: 0,
          duration: 1.5,
          stagger: 0.2, // stagger the animation
          ease: 'power3.out',
        },
      );
    }
  }, []);

  return (
    <div className="bg-black">
      <Section title="Our Capabilities" description="We can help you with...">
        <div ref={containerRef} className="flex flex-wrap justify-center">
          {capabilities.map((item, index) => (
            <div key={index} className="m-3 rounded-md bg-primary-500 p-2">
              <h2 className="text-primary-100">{item}</h2>
            </div>
          ))}
        </div>

        <h2 className="mx-20 pt-10 text-primary-500">BENEFITS</h2>
        <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2 lg:grid-cols-2">
          <h3 className="mx-20 text-4xl font-bold text-primary-100">
            Your Vision, Realized: Expert Web Development to Elevate Your Brand
            ✨
          </h3>
          <div className="mx-20">
            <h3 className="py-2 pb-4 text-lg font-light text-primary-100">
              Why juggle hiring, manage expenses, or stress over the details?
              Our web development packages connect you with expert solutions to
              elevate your brand effortlessly. Choose the package that fits your
              goals, and let us handle the rest.
            </h3>
            <Button>Get Started</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="glassmorphism-container mx-4 grid justify-items-center text-center">
            <Image
              className="py-4"
              src="/assets/images/benefits/strategic-planning.svg"
              alt="Strategic Planning"
              width={100}
              height={100}
            />
            <h3 className="mb-3 text-2xl font-semibold text-primary-100">
              Strategic Planning
            </h3>
            <h4 className="text-base text-primary-100">
              Every project begins with thorough research and strategic planning
              to ensure a holistic understanding of our clients objectives and
              target audience.
            </h4>
          </div>

          <div className="glassmorphism-container mx-4 grid justify-items-center text-center">
            <Image
              className="py-4"
              src="/assets/images/benefits/customized-solutions.svg"
              alt="Customized Solutions"
              width={100}
              height={100}
            />
            <h3 className="mb-3 text-2xl font-semibold text-primary-100">
              Customized Solutions
            </h3>
            <h4 className="text-base text-primary-100">
              We believe in tailoring our services to suit each project’s unique
              requirements, resulting in solutions that perfectly align with our
              clients’ brand identities.
            </h4>
          </div>

          <div className="glassmorphism-container mx-4 grid justify-items-center text-center">
            <Image
              className="py-4"
              src="/assets/images/benefits/user-centric-approach.svg"
              alt="User-Centric Approach"
              width={100}
              height={100}
            />
            <h3 className="mb-3 text-2xl font-semibold text-primary-100">
              User-Centric Approach
            </h3>
            <h4 className="text-base text-primary-100">
              Our projects are designed with the end-user in mind, prioritizing
              seamless user experiences and intuitive interfaces.
            </h4>
          </div>

          <div className="col-span-1 grid justify-items-center gap-6 md:col-span-2 lg:col-span-3 lg:grid-cols-2">
            <div className="glassmorphism-container mx-4 grid justify-items-center py-4 text-center">
              <Image
                className="py-4"
                src="/assets/images/benefits/cutting-edge-technologies.svg"
                alt="Cutting-Edge Technologies"
                width={100}
                height={100}
              />
              <h3 className="mb-3 text-2xl font-semibold text-primary-100">
                Cutting-Edge Technologies
              </h3>
              <h4 className="text-base text-primary-100">
                We leverage the latest technologies and industry best practices
                to deliver high-performance and future-proof solutions.
              </h4>
            </div>
            <div className="glassmorphism-container mx-4 grid justify-items-center py-4 text-center">
              <Image
                className="py-4"
                src="/assets/images/benefits/timely-delivery.svg"
                alt="Timely Delivery"
                width={100}
                height={100}
              />
              <h3 className="mb-3 text-2xl font-semibold text-primary-100">
                Timely Delivery
              </h3>
              <h4 className="text-base text-primary-100">
                We adhere to strict timelines and project schedules to ensure
                timely delivery without compromising on quality.
              </h4>
            </div>
          </div>
        </div>
      </Section>

      <style jsx>{`
        .glassmorphism-container {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(4px);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 4%;
        }
      `}</style>
    </div>
  );
};

export { OurCapabilities };
