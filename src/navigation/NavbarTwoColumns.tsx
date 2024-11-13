import Link from 'next/link';
import type { ReactNode } from 'react';
import { useState } from 'react';

import { Button } from '@/button/Button';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex flex-wrap items-center justify-between text-white">
      {/* Logo */}
      <div>
        <Link href="/">{props.logo}</Link>
      </div>

      {/* Mobile Menu Button */}
      {!isOpen && (
        <button
          className="block p-2 text-white focus:outline-none lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <svg
            className="size-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      )}
      {/* Desktop Navigation Links */}
      <nav className="hidden lg:flex lg:w-auto lg:items-center">
        <ul className="flex flex-col items-center gap-8 text-xl font-medium lg:flex-row lg:gap-8 lg:text-white">
          {props.children}
        </ul>
      </nav>

      {/* Desktop Contact Button */}
      <div className="hidden lg:block">
        <Button>Contact Us</Button>
      </div>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90  transition-transform duration-300 ease-in-out">
          <button
            className="absolute right-4 top-4 text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close navigation"
          >
            <svg
              className="size-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav>
            <ul className="flex flex-col items-center gap-8 text-xl font-medium text-white">
              {props.children}
            </ul>
          </nav>
          <div className="mt-8">
            <Button>Contact Us</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export { NavbarTwoColumns };
