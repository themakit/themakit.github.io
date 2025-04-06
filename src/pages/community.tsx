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
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-colors duration-300 hover:bg-[#3dd5c4] dark:hover:bg-[#2ec4b6]">
            <h3 className="text-xl font-semibold mb-4">
              <a
                href="https://github.com/orgs/themakit/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2ec4b6] dark:text-[#3dd5c4] hover:text-white"
              >
                GitHub Discussions
              </a>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
              Get support and share knowledge with the community.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center transition-colors duration-300 hover:bg-[#3dd5c4] dark:hover:bg-[#2ec4b6]">
            <h3 className="text-xl font-semibold mb-4">
              <a
                href="https://discord.gg/RwfDa89d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2ec4b6] dark:text-[#3dd5c4] hover:text-white"
              >
                Discord Server
              </a>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
              Join real-time conversations and get help.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}