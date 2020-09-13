import React, { useContext } from 'react';
import { Global, css } from '@emotion/core';

import { AboutContext } from '../../context/about/AboutContext';
import { ThemeContext } from '../../context/theme/ThemeContext';

const GlobalStyles = () => {
  const { color } = useContext(AboutContext);
  const { dark } = useContext(ThemeContext);

  return (
    <Global
      styles={css`
        :root {
          --dark: ${dark ? '#1F2124' : '#FEFEFE'};
          --black: #1f2124;
          --orange: #f6b352;
          --white: #f2f2f2;
          --gray: #bdbdbd;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: var(--dark);
        }

        ::-webkit-scrollbar-thumb {
          background: ${color ? color : 'var(--orange)'};
        }

        *,
        *:before,
        *:after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'PT Sans', sans-serif;
          height: 100%;
          /* background-color: var(--dark); */
          /* color: var(--white); */
          background-color: var(--dark);
        }

        h1,
        h2,
        h3 {
          font-family: 'Roboto Slab', serif;
        }

        img {
          max-width: 100%;
        }
      `}
    />
  );
};
export default GlobalStyles;
