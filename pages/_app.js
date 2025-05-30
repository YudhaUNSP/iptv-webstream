// pages/_app.js
import '../styles/globals.css';
import { useEffect } from 'react';
import Script from 'next/script';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log('App initialized');
  }, []);
  
  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/default-channel.png" />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/hls.js@1"
        strategy="afterInteractive"
        onLoad={() => {
          console.log('HLS.js loaded');
          window.Hls = window.Hls || {};
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
