import React from 'react';
import { Global, css } from '@emotion/core';

const GlobalStyles = () => (
  <Global
    styles={css`
      :root {
        --dark: #1F2124;
        --orange: #F6B352;
        --white: #F2F2F2;
        --gray: #BDBDBD;
      }

      *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        font-family: 'PT Sans', sans-serif;
        /* background-color: var(--dark); */
        /* color: var(--white); */
      }

      h1, h2, h3 {
        font-family: 'Roboto Slab', serif;
      }
      
      img {
        max-width: 100%;
      }
    `}
  />
);

export default GlobalStyles;