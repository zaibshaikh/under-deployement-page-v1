import Layout from '@/components/Layout';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <Layout title="Site Under Development">
      <div className="text-slate-200">
        <div className="text-4xl pt-16">
          <span className="text-blue-200">404:</span> Page Not Found
        </div>
        <p className="font-light mt-8 text-lg leading-8">
          The URL you have tried to visit no longer exists or has been moved.
          This is probably my fault, so{' '}
          <span className="font-medium">I&apos;m sorry!</span> I hope I can make
          it up to you with the next page you find…
        </p>
      </div>
      <div className="pt-10">
        <Link
          href={'/'}
          className="bg-slate-300 hover:bg-slate-400 hover:shadow-md hover:bg-darkgrey/20 transition duration-300 ease-in-out px-8 py-4 mt-8"
        >
          Return to Homepage
        </Link>
      </div>
    </Layout>
  );
}
