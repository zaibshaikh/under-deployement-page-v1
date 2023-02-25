import Layout from '@/components/Layout';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <Layout title="Site Under Development">
      <div className="text-slate-200 m-9">
        <div className="text-green mt-36">Hi, my name is</div>
        <div className="text-lightestslate mt-8 leading-snug font-bold text-4xl">
          Makki Mohammed Zaib Shaikh.
        </div>
        <div className="text-slate font-bold mt-1 text-4xl">
          I build things that you imagine!
        </div>
        {/* <div className="text-slate mt-5 text-lg font-medium">
          Artist & Graphic Designer | UI UX Designer | Product Designer | Video
          Editor & Animator
        </div> */}
        <div className="text-slate mt-5 text-md font-medium">
          I&apos;m a designer specialized in designing (and occasionally coding)
          exceptional digital experiences. Currently, I&apos;m focused on
          building brands, visual identity at{' '}
          <a
            className="text-green transition duration-500 ease-in-out"
            href={'https://www.spek.co.in/'}
            rel="noopener noreferrer"
            target={'_blank'}
          >
            Spek Digital
          </a>
          .
        </div>
        <div className="text-lightestslate mt-16 lg:mt-36 text-md font-medium text-center">
          Unfortunately, my site is under development as of now but you can
          still check out my work on Behance & GitHub
        </div>
        <div className="flex flex-row gap-10 text-green mt-6 justify-center">
          <Link
            className="text-bold hover:bg-green/10 transition duration-500 ease-in-out rounded-sm text-green-300-500 border-green border px-4 py-2"
            rel="noopener noreferrer"
            target={'_blank'}
            href={'https://www.behance.net/mohammedzaibshaikh'}
          >
            Behance
          </Link>
          <Link
            className="text-bold hover:bg-green/10 transition duration-500 ease-in-out rounded-sm text-green-300-500 border-green border px-4 py-2"
            rel="noopener noreferrer"
            target={'_blank'}
            href={'https://github.com/zaibshaikh'}
          >
            GitHub
          </Link>
        </div>
      </div>
    </Layout>
  );
}
