// components/Layout.js
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        {/* Metadata umum */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Nonton TV Online Gratis – Streaming Langsung Channel Terbaik"
        />
        <title>YuuStream - Nonton TV Favorit Anda</title>
        
        {/* Favicon */}
        <link rel="icon" href="/tv.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/tv.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/tv.svg" />
        
        {/* Font Poppins & FontAwesome */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />
      </Head>

      <Navbar />
      <main id="mainContent">{children}</main>
      <Footer />
    </>
  );
}
