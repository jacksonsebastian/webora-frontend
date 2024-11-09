/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import gsap from 'gsap';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import BlobButton from '@/button/BlobButton';
import CircleText from '@/CircleText/CircleText';
import BookMeeting from '@/components/bookMeeting';
import { HeroOneButton } from '@/hero/HeroOneButton';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  const [open, setOpen] = useState(false); // Modal state
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    // Letter animation (typewriter effect)
    tl.fromTo(
      titleRef.current,
      8,
      { width: '0' },
      {
        width: '20.18em', // Matches CSS width for typewriter effect
        ease: 'SteppedEase.config(37)',
      },
      0,
    );

    // Text cursor animation
    tl.fromTo(
      titleRef.current,
      0.5,
      { borderRightColor: 'rgba(255,255,255,0.75)' },
      {
        borderRightColor: 'rgba(255,255,255,0)',
        repeat: -1,
        ease: 'SteppedEase.config(37)',
      },
      0,
    );

    tl.play(); // Start the animation
  }, []);

  const handleOpen = () => {
    setOpen(true); // Open the modal
  };

  return (
    <Background
      color="bg-gray-100"
      className="relative min-h-screen bg-cover bg-center"
      backgroundImage="/assets/images/webora-hero-bg.png"
    >
      <div className="css-blurry-gradient-right"></div>
      <div className="css-blurry-gradient-left"></div>

      <Section
        className="navbar max-w-screen-2xl text-primary-100"
        yPadding="py-4"
      >
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link className="item" href="/">
              <div data-text="What we do" className="linktext">
                About
              </div>
            </Link>
          </li>
          <li>
            <Link className="item" href="/">
              <div data-text="What we provide" className="linktext">
                Service
              </div>
            </Link>
          </li>
          <li>
            <Link className="item" href="/">
              <div data-text="Our Benefits" className="linktext">
                Benefits
              </div>
            </Link>
          </li>
          <li>
            <Link className="item" href="/">
              <div data-text="Our Portfolio" className="linktext">
                Portfolio
              </div>
            </Link>
          </li>
          <li>
            <Link className="item" href="/">
              <div data-text="Read FAQ" className="linktext">
                FAQ
              </div>
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section className="static !max-w-screen-2xl " yPadding="pt-20">
        <HeroOneButton
          title={
            <>
              {'Amazing website creation\n'}
              with <span className="text-primary-500">webora agency</span>
            </>
          }
          description="help you to build a website company that is modern, user-friendly, good SEO, and Clean design"
          button={
            <div onClick={handleOpen}>
              <BlobButton />
            </div>
          }
        />
      </Section>

      {open && <BookMeeting setOpen={setOpen} />}

      <div className="flex justify-center">
        <CircleText />
      </div>

      <style jsx>{`
        /* Custom scrollbar styling */
        .custom-scrollbar::-webkit-scrollbar {
          width: 12px; /* Adjust width for a narrower look */
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #854cff; /* Color of the scrollbar thumb */
          border-radius: 4px;
          border: 5px solid #f1f1f1;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #555; /* Darker color on hover */
        }

        .glassmorphism-container {
          z-index: 999;
          background: rgba(255, 255, 255, 3%);
          backdrop-filter: blur(5px); /* Stronger blur for glass effect */
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.2); /* Light border */
        }
      `}</style>
    </Background>
  );
};

export { Hero };
