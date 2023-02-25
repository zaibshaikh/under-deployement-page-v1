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
        <nav>
          <div className="lg:max-w-7xl lg:mx-auto p-4 lg:text-xl md:text-lg lg:py-8 flex flex-row justify-between items-center">
            <div>Logo</div>
            <div>Resume</div>
          </div>
        </nav>
      </header>
      <main className="min-w-screen min-h-screen bg-slate-800">
        <div className="lg:max-w-7xl lg:mx-auto p-4 lg:text-xl md:text-lg lg:py-8 ">
          {children}
        </div>
      </main>
      <footer className="bg-slate-900 text-white p-4 lg:py-8">
        <div className="text-center text-sm lg:text-xl md:text-lg lg:max-w-7xl lg:mx-auto">
          Made with ❤️ by Makki Mohammed Zaib Shaikh - 2023. Do you want to see
          my other works coding projects that I have created? Head over to my{' '}
          <Link
            rel="noopener noreferrer"
            target={'_blank'}
            href={'https://github.com/zaibshaikh'}
          >
            GitHub
          </Link>
        </div>
      </footer>
    </>
  );
}
