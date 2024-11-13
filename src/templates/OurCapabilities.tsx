// eslint-disable-next-line import/no-extraneous-dependencies
import Image from 'next/image';

import { Button } from '@/button/Button';
import CardSlider from '@/components/cardSlider/cardSlider';
import { Section } from '@/layout/Section';

const OurCapabilities = () => {
  return (
    <div className="bg-black">
      <Section
        titleClassName="mb-6"
        className="relative"
        title="Our Capabilities"
        description="We can help you with..."
      >
        <div className="flex flex-wrap justify-center">
          <CardSlider />
        </div>
        <h2 className="mx-4 pt-8 text-center text-2xl font-bold text-primary-500 sm:mx-6 sm:text-left sm:text-xl md:mx-10 md:pt-10 md:text-xl lg:mx-20 lg:text-xl">
          BENEFITS
        </h2>
        <div className="grid grid-cols-1 gap-8 py-6 md:grid-cols-2 lg:gap-12">
          {/* Heading Section */}
          <h3 className="mx-4 text-xl font-bold text-primary-100 sm:text-2xl md:mx-10 md:text-3xl lg:mx-20 lg:text-4xl">
            Your Vision, Realized: Expert Web Development to Elevate Your Brand
            ✨
          </h3>

          {/* Content & Button Section */}
          <div className="mx-4 md:mx-10 lg:mx-20">
            <h3 className="py-2 pb-6 text-justify text-base font-light text-primary-100 sm:text-left sm:text-lg md:text-lg lg:pb-8 lg:text-xl">
              Why juggle hiring, manage expenses, or stress over the details?
              Our web development packages connect you with expert solutions to
              elevate your brand effortlessly. Choose the package that fits your
              goals, and let us handle the rest.
            </h3>

            <div className="flex justify-center sm:justify-start">
              <Button className="px-4 py-2">Get Started</Button>
            </div>
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
          background: rgba(255, 255, 255, 3%);
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
