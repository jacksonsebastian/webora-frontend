import ContactUs from '@/contactUs/ContactUs';
import { CTABanner } from '@/cta/CTABanner';
import Faq from '@/faq/Faq';
import { Meta } from '@/layout/Meta';
import Pricing from '@/pricing/Pricing';
import { AppConfig } from '@/utils/AppConfig';

import { Footer } from './Footer';
import { Hero } from './Hero';
import { OurCapabilities } from './OurCapabilities';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <OurCapabilities />
    <Pricing />
    <Faq />
    <ContactUs />
    <CTABanner />
    <Footer />
  </div>
);

export { Base };
