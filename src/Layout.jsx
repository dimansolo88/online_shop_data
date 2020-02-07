import React, { createContext, useState } from 'react'
import { theme2, theme1 } from './theme/GlobalStyle'
import ThemeWrapper from './ThemeWrapper'
import Router from './Router'

export const ThemeContext = createContext({})

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(theme2)

  const handlerTheme = value => {
    value === 'dark' ? setTheme(theme2) : setTheme(theme1)
  }

  return (
    <ThemeContext.Provider value={{ theme, handlerTheme }}>
      <div>
        {children}
        <ThemeWrapper>
          <Router />
        </ThemeWrapper>
      </div>
    </ThemeContext.Provider>

  )
}

export default Layout
