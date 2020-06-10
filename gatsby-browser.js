import React from 'react';

import AboutProvider from './src/context/about/AboutContext';

export const wrapRootElement = ({ element }) => (
  <AboutProvider>
    {element}
  </AboutProvider>
)