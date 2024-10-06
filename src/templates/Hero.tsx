import Link from 'next/link';

import BlobButton from '@/button/BlobButton';
import CircleText from '@/CircleText/CircleText';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
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
        description="help you to build website company that is modern, user friendly, good SEO, and Clean design"
        button={
          <Link href="https://webora.agency">
            <BlobButton />
          </Link>
        }
      />
    </Section>
    <div className="flex justify-center ">
      <CircleText />
    </div>
  </Background>
);

export { Hero };
