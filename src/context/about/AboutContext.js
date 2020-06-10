import React, { useState, createContext } from 'react';

const defaultState = {
  color: null,
  setColor: () => {}
}

export const AboutContext = createContext(defaultState);

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