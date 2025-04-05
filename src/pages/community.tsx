import Layout from '../components/Layout';

export default function Community() {
  return (
    <Layout>
      <section className="text-center py-16 bg-gray-50 dark:bg-gray-900">
        <h1 className="text-4xl font-bold mb-6">Join Our Community</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Connect with other developers, share ideas, and grow together.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">GitHub Discussions</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Get support and share knowledge with the community.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Discord Server</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Join real-time conversations and get help instantly.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Workshops</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Attend live workshops to enhance your skills.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Blog</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Read tutorials and best practices from our team.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}