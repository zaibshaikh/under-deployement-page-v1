import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>
          {title
            ? title + ' - Makki Mohammed Zaib Shaikh'
            : 'Makki Mohammed Zaib Shaikh'}
        </title>
        <meta name="description" content="Makki Mohammed Zaib Shaikh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className="bg-navy text-green bg-slate-900">
          <div className="lg:max-w-7xl lg:mx-auto p-4 lg:text-lg md:text-lg lg:py-8 flex flex-row justify-between items-center">
            <div>Logo</div>
            <Link
              className="text-bold hover:bg-green/10 transition duration-300 ease-in-out rounded-md text-green-300-500 border-green border px-4 py-2"
              rel="noopener noreferrer"
              target={'_blank'}
              href={'/resume.pdf'}
            >
              Resume
            </Link>
          </div>
        </nav>
      </header>
      <main className="bg-navy min-w-screen min-h-screen bg-slate-800">
        <div className="lg:max-w-7xl lg:mx-auto p-4 lg:text-xl md:text-lg lg:py-8 ">
          {children}
        </div>
      </main>
      <footer className="bg-navy text-lightslate p-4 lg:py-8">
        <div className="text-center text-sm leading-6 lg:text-xl md:text-lg lg:max-w-7xl lg:mx-auto">
          Designed & Build by Makki Mohammed Zaib Shaikh
        </div>
      </footer>
    </>
  );
}
