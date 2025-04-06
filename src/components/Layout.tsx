import Link from 'next/link';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="bg-white dark:bg-[#0f3d3e] shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <img
                src="/logo-small.svg"
                alt="ThemaKit Logo"
                className="h-10 w-10 transition-transform transform hover:scale-110 cursor-pointer"
              />
            </Link>
            <span
              className="text-2xl font-bold text-[#2ec4b6] dark:text-[#2ec4b6]"
              aria-label="ThemaKit homepage"
            >
            </span>
          </div>
        </div>
      </header>
      <main className="container px-4 py-10">{children}</main>
      <footer
        className="text-center text-sm text-gray-500 dark:text-gray-400 py-10 bg-gray-100 dark:bg-[#0f3d3e]"
        aria-label="Footer"
      >
        <div className="max-w-6xl mx-auto px-4">
          <p className="mb-4">© 2025 ThemaKit. All rights reserved.</p>
          <div className="flex justify-center space-x-8">
            <a
              href="/docs"
              className="hover:text-[#2ec4b6] dark:hover:text-[#2ec4b6]"
            >
              Docs
            </a>
            <a
              href="/community"
              className="hover:text-[#2ec4b6] dark:hover:text-[#2ec4b6]"
            >
              Community
            </a>
            <a
              href="https://github.com/themakit"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2ec4b6] dark:hover:text-[#2ec4b6]"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}