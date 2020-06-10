import React, { useContext } from 'react';
import { Global, css } from '@emotion/core';

import { AboutContext } from '../../context/about/AboutContext';

const GlobalStyles = () => {

  const { color } = useContext(AboutContext);

  return (
    <Global
      styles={css`
        :root {
          --dark: #1F2124;
          --orange: #F6B352;
          --white: #F2F2F2;
          --gray: #BDBDBD;
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
  
        *, *:before, *:after {
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
  
        h1, h2, h3 {
          font-family: 'Roboto Slab', serif;
        }
        
        img {
          max-width: 100%;
        }
      `}
    />
  );
}
export default GlobalStyles;