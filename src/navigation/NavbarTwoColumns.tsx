import Link from 'next/link';
import type { ReactNode } from 'react';

import { Button } from '@/button/Button';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center justify-between text-white">
    <div>
      <Link href="/">{props.logo}</Link>
    </div>

    <nav>
      <ul className="navbar flex items-center gap-8 text-xl font-medium">
        {props.children}
      </ul>
    </nav>

    <Button>Contact Us</Button>

    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };
