import { Meta } from '../layout/Meta';
import Pricing from '../pricing/Pricing';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { OurCapabilities } from './OurCapabilities';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <OurCapabilities />
    <Pricing />
    {/* <VerticalFeatures />
    <Banner /> */}
    <Footer />
  </div>
);

export { Base };
