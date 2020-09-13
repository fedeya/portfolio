import React from 'react';
import { Helmet } from 'react-helmet';
import { GatsbySeo } from 'gatsby-plugin-next-seo';

import Header from './header';

import GlobalStyles from './global-styles';

function Layout({ children }) {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <link rel="icon" type="image/png" href="/logo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/boxicons@2.0.5/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Helmet>
      <GatsbySeo
        title="Federico Minaya"
        description="Federico Minaya is a Full Stack developer with 17 years"
        canonical="https://fedeya.tk"
        openGraph={{
          url: 'https://fedeya.tk/',
          type: 'website',
          site_name: 'Federico Minaya',
          title: 'Federico Minaya',
          description:
            'Federico Minaya is a Full Stack developer with 17 years',
          images: [
            {
              url: '/graph.png',
              alt: 'Federico Minaya',
              width: 800,
              height: 600
            }
          ]
        }}
        twitter={{
          cardType: 'summary_large_image',
          handle: '@fede_minaya',
          site: '@fede_minaya'
        }}
      />
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Layout;
