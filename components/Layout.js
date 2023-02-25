import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>
          {title ? title + ' - MMZS' : 'Makki Mohammed Zaib Shaikh'}
        </title>
        <meta name="description" content="Makki Mohammed Zaib Shaikh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className="bg-navy text-green bg-slate-900">
          <div className="lg:max-w-7xl lg:mx-auto p-4 lg:text-lg md:text-lg lg:py-8 flex flex-row justify-between items-center">
            <Link href={'/'} rel="noopener noreferrer">
              <Image
                src={'/next.svg'}
                width={100}
                height={100}
                alt={'Logo'}
              ></Image>
            </Link>
            <Link
              className="text-bold hover:bg-green/10 transition duration-500 ease-in-out rounded-sm text-green-300-500 border-green border px-4 py-2"
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
      <footer className="bg-navy text-center text-lightslate hover:text-green transition duration-500 ease-in-out p-4 lg:py-8">
        <Link
          href={'https://github.com/zaibshaikh'}
          rel="noopener noreferrer"
          target={'_blank'}
          className="text-sm leading-6 lg:text-xl md:text-lg lg:max-w-7xl lg:mx-auto"
        >
          Designed & Build by Makki Mohammed Zaib Shaikh
        </Link>
      </footer>
    </>
  );
}
