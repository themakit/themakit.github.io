import Head from 'next/head';
import Layout from '../components/Layout';
import FeatureCard from '../components/FeatureCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>ThemaKit – Build Stunning Interfaces</title>
      </Head>
      <Layout>
        <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-6xl font-extrabold mb-6">ThemaKit</h1>
            <p className="text-2xl font-light mb-8">
              Build beautiful, consistent interfaces with ease.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-4">
              <button
                className="flex items-center justify-center px-12 py-6 bg-blue-600 text-white font-bold rounded-full text-xl hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg transition-transform transform hover:scale-105"
                aria-label="Get started with ThemaKit"
              >
                Get Started
              </button>
              <button
                className="flex items-center justify-center px-10 py-4 bg-transparent border-2 border-blue-600 text-blue-600 font-medium rounded-full text-lg hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm transition-transform transform hover:scale-105"
                aria-label="Learn more about ThemaKit"
              >
                Learn More
              </button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard title="Customizable" description="Theme every aspect of your components." />
              <FeatureCard title="Type-Safe" description="Built with TypeScript for a robust experience." />
              <FeatureCard title="Accessible" description="WCAG 2.1 compliant components out of the box." />
              <FeatureCard title="Modern Stack" description="React 18+, CSS-in-JS, and zero jQuery dependencies." />
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Why Choose ThemaKit?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              ThemaKit is designed to help developers create stunning, accessible, and customizable interfaces effortlessly.
            </p>
            <div className="flex justify-center">
              <button
                className="px-10 py-4 bg-blue-600 text-white font-semibold rounded-full text-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                aria-label="Start using ThemaKit now"
              >
                Start Now
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}