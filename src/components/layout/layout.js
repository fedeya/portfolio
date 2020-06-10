import React from 'react';
import { Helmet } from 'react-helmet';

import Header from './header';

import GlobalStyles from './global-styles';

function Layout({ children }) {
  return (
    <>
      <Helmet>
        <title>Federico Minaya</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"/>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet" />
        <link href='https://unpkg.com/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet' />
      </Helmet>
      <GlobalStyles />
      <Header />
      <main>
        {children}
      </main>
    </>
  );
}

export default Layout;