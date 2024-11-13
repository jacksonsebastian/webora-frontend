import { Section } from '@/layout/Section';

const CTABanner = () => {
  return (
    <div className="bg-black p-4">
      <Section
        yPadding="py-8"
        className="!rounded-xl !bg-gradient-to-r from-primary-500 to-primary-600 !text-primary-100"
      >
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-primary-100">
            Sign up for our newsletter
          </h2>
          <div className="mt-4 text-lg text-primary-300 lg:px-48">
            Subscribe to our newsletter and be the first to know about exclusive
            offers on our website packages designed to elevate your brand and
            boost your online presence!
          </div>
        </div>

        {/* Form Section */}
        <form action="#" className="mx-auto max-w-screen-md">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:space-y-0">
            <div className="relative w-full sm:w-3/4">
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
                type="email"
                id="email"
                className="block w-full rounded-lg border border-primary-500 bg-white p-3 pl-10 text-sm text-primary-900 outline-none focus:border-primary-600"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer rounded-lg border border-primary-500 bg-primary-500 px-6 py-3 text-sm font-medium text-white hover:bg-primary-600 focus:ring-4 focus:ring-primary-300 sm:w-auto"
            >
              Subscribe
            </button>
          </div>

          <div className="newsletter-form-footer mx-auto mt-4 max-w-screen-sm text-left text-sm text-gray-500 dark:text-gray-300">
            We care about the protection of your data. &nbsp;
            <a href="#" className="font-medium text-primary-100 underline">
              Read our Privacy Policy
            </a>
            .
          </div>
        </form>
      </Section>
    </div>
  );
};

export { CTABanner };
