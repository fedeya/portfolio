import React from 'react';

import AboutProvider from './src/context/about/AboutContext';
import ThemeProvider from './src/context/theme/ThemeContext';

export const wrapRootElement = ({ element }) => (
  <AboutProvider>
    <ThemeProvider>
      {element}
    </ThemeProvider>
  </AboutProvider>
);