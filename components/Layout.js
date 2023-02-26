import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>
          {title ? title + ' - Portfolio' : 'Makki Mohammed Zaib Shaikh'}
        </title>
        <meta name="description" content="Makki Mohammed Zaib Shaikh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <header>
        <nav className="bg-navy text-green bg-slate-900 font-sfmono">
          <div className="lg:max-w-7xl lg:mx-auto p-4 text-sm lg:py-8 flex flex-row justify-between items-center">
            <Link href={'/'} rel="noopener noreferrer">
              <Image
                src={'/logo.png'}
                width={42}
                height={42}
                alt={'Logo'}
              ></Image>
            </Link>
            <Link
              className="hover:bg-green/10 transition duration-500 ease-in-out rounded-sm text-green border-green border px-4 py-2"
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
        <div className="lg:max-w-7xl lg:mx-auto p-4 lg:text-xl md:text-lg lg:py-8 justify-center">
          {children}
        </div>
      </main>
      <footer className="bg-navy text-center text-lightslate p-4 lg:py-8">
        <Link
          href={'https://github.com/zaibshaikh'}
          rel="noopener noreferrer"
          target={'_blank'}
          className="text-sm hover:text-green transition duration-500 ease-in-out leading-6 lg:max-w-7xl lg:mx-auto font-sfmono"
        >
          Designed & Build by Makki Mohammed Zaib Shaikh
        </Link>
      </footer>
    </>
  );
}
