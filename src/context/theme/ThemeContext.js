import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  
  const [dark, setDark] = useState(true);

  return (
    <ThemeContext.Provider
      value={{
        dark,
        setDark
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;