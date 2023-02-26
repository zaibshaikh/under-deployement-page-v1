import Layout from '@/components/Layout';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <Layout title="Site Under Development">
      <div className="m-9 w-11/12 md:w-3/4 lg:w-2/3 mx-auto">
        <div className="text-green mt-36 font-sfmono">Hi, my name is</div>
        <div className="text-lightestslate font-sfpro mt-8 leading-snug font-bold text-4xl lg:text-5xl">
          Makki Mohammed Zaib Shaikh.
        </div>
        <div className="text-slate font-bold font-sfpro mt-3 text-4xl lg:text-5xl">
          I design & build things that you imagine!
        </div>
        {/* <div className="text-slate mt-5 text-lg font-medium">
          Artist & Graphic Designer | UI UX Designer | Product Designer | Video
          Editor & Animator
        </div> */}
        <div className="text-slate font-normal font-sfpro mt-5 text-md">
          I&apos;m a designer specialized in designing (and occasionally coding)
          exceptional digital experiences. Currently, I&apos;m focused on
          building brands & visual identity at{' '}
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
        <div className="text-lightestslate font-sfmono text-base mt-16 lg:mt-36 text-center">
          Unfortunately, my site is under development as of now but you can
          still check out my work on Behance & GitHub
        </div>
        <div className="flex flex-row gap-10 text-green mt-6 justify-center text-sm">
          <Link
            className="hover:bg-green/10 transition duration-500 ease-in-out rounded-sm text-green border-green border px-4 py-2 font-sfmono"
            rel="noopener noreferrer"
            target={'_blank'}
            href={'https://www.behance.net/mohammedzaibshaikh'}
          >
            Behance
          </Link>
          <Link
            className="hover:bg-green/10 transition duration-500 ease-in-out rounded-sm text-green border-green border px-4 py-2 font-sfmono"
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
