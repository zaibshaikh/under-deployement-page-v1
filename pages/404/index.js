import Layout from '@/components/Layout';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <Layout title="404 Page not Found">
      <div className="justify-center">
        <div className="text-4xl pt-16 font-sfprobold text-lightestslate font-bold">
          <span className="text-green">404:</span> Page Not Found
        </div>
        <p className="font-sfmono mt-8 text-base lg:w-1/2 text-slate">
          The URL you have tried to visit no longer exists or has been moved.
          This is probably my fault, so{' '}
          <span className="font-medium">I&apos;m sorry!</span> I hope I can make
          it up to you with the next page you find…
        </p>
      </div>
      <div className="pt-10">
        <Link
          className="text-green hover:bg-green/10 transition duration-500 ease-in-out rounded-sm text-sm font-sfmono text-green-300-500 border-green border px-4 py-4"
          rel="noopener noreferrer"
          href={'/'}
        >
          Return to Homepage
        </Link>
      </div>
    </Layout>
  );
}
