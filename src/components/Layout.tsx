import Link from 'next/link';
import { ReactNode, useState } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <>
      <header className="bg-white dark:bg-gray-900 shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400" aria-label="Navigate to ThemaKit homepage">
            ThemaKit
          </Link>
          <nav className="space-x-6 flex items-center">
            <Link href="/docs" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Docs</Link>
            <Link href="/community" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Community</Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-8.66l-.707.707M4.34 4.34l-.707.707M21 12h-1M4 12H3m16.66 4.66l-.707-.707M4.34 19.66l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9a9 9 0 010-18z" />
                </svg>
              )}
            </button>
          </nav>
        </div>
      </header>
      <main className="container px-4 py-10">{children}</main>
      <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-10 bg-gray-100 dark:bg-gray-800" aria-label="Footer">
        <div className="max-w-6xl mx-auto px-4">
          <p className="mb-4">© 2025 ThemaKit. All rights reserved.</p>
          <div className="flex justify-center space-x-8"> {/* Increased spacing */}
            <a href="/docs" className="hover:text-blue-600 dark:hover:text-blue-400">
              Docs  
            </a>
            <a href="/community" className="hover:text-blue-600 dark:hover:text-blue-400">
              Community  
            </a>
            <a href="https://github.com/themakit" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
              GitHub  
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}