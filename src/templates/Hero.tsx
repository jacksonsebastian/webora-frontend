/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import Link from 'next/link';
import { useEffect, useState } from 'react';

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

  const handleOpen = () => {
    setOpen(true); // Open the modal
  };

  useEffect(() => {
    const preventScroll = (e: { preventDefault: () => void }) => {
      e.preventDefault(); // Prevent scroll events
    };

    if (open) {
      // Prevent scrolling by adding an event listener
      document.body.style.overflow = 'scroll'; // Keep scrollbar visible
      document.body.addEventListener('wheel', preventScroll, {
        passive: false,
      }); // Prevent scroll events
      document.body.addEventListener('touchmove', preventScroll, {
        passive: false,
      }); // Prevent touch scroll events
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling when modal is closed
      // Clean up the event listeners when the modal is closed
      document.body.removeEventListener('wheel', preventScroll);
      document.body.removeEventListener('touchmove', preventScroll);
    }

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      document.body.removeEventListener('wheel', preventScroll);
      document.body.removeEventListener('touchmove', preventScroll);
    };
  }, [open]);

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

      <div className="absolute bottom-20 left-1/2 flex -translate-x-1/2 transform justify-center md:relative md:bottom-0">
        <CircleText />
      </div>
    </Background>
  );
};

export { Hero };
