import React, { useState, createContext } from 'react';

const defaultState = {
  dark: true,
  setDark: () => {}
};

export const ThemeContext = createContext(defaultState);

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
