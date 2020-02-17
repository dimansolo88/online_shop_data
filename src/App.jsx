import React, { createContext, useState } from 'react'
import { theme2, theme1 } from './theme/GlobalStyle'
import ThemeWrapper from './theme/ThemeWrapper'
import Router from './Routes'

export const ThemeContext = createContext({})

function App() {
  const [theme, setTheme] = useState(theme2)
  const handlerTheme = value => {
    value === 'dark' ? setTheme(theme2) : setTheme(theme1)
  }
  return (
    <ThemeContext.Provider value={{ theme, handlerTheme }}>
      <ThemeWrapper>
        <Router />
      </ThemeWrapper>
    </ThemeContext.Provider>
  )
}

export default App
