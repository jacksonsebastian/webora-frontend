import { Section } from '@/layout/Section';

const CTABanner = () => {
  return (
    <div className="bg-black p-4">
      <Section
        yPadding="py-8"
        className="!rounded-xl !bg-gradient-to-r from-primary-500 to-primary-600 !text-primary-100"
      >
        <div className="mb-12 text-center">
          <h2 className="text-primary-00 text-4xl font-bold">
            Sign up for our newsletter
          </h2>

          <div className="mt-4 text-xl text-primary-300 md:px-64">
            Subscribe to our newsletter and be the first to know about exclusive
            offers on our website packages designed to elevate your brand and
            boost your online presence!
          </div>
        </div>

        <form action="#">
          <div className="mx-auto mb-3 max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0">
            <div className="relative w-full">
              <label
                htmlFor="email"
                className="mb-2 hidden text-sm font-medium text-primary-400"
              >
                Email address
              </label>
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="size-5 text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                className=" block w-full rounded-l-lg border p-2.5 pl-10 text-sm text-primary-500 outline-none"
                placeholder="Enter your email"
                type="email"
                id="email"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full cursor-pointer rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-600 focus:ring-4 focus:ring-primary-300 sm:rounded-none sm:rounded-r-lg"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="newsletter-form-footer mx-auto max-w-screen-sm text-left text-sm text-gray-500 dark:text-gray-300">
            We care about the protection of your data. &nbsp;
            <a href="#" className="font-medium text-primary-100 underline">
              Read our Privacy Policy
            </a>
            .
          </div>
        </form>

        <style jsx>{`
          .backgrounds {
            background: !#854cff;
            backdrop-filter: blur(60px); /* Stronger blur for glass effect */
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.2); /* Light border */
          }
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
export { CTABanner };
