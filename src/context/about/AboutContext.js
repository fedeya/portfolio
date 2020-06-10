import React, { useState, createContext } from 'react';

export const AboutContext = createContext();

function AboutProvider({ children }) {

  const [color, setColor] = useState(null);

  return (
    <AboutContext.Provider
      value={{
        color,
        setColor
      }}
    >
      {children}
    </AboutContext.Provider>
  );

}

export default AboutProvider;