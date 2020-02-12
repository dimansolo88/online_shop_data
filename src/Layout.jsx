import React, { createContext, useState } from 'react'
import { theme2, theme1 } from './theme/GlobalStyle'
import ThemeWrapper from './theme/ThemeWrapper'
import Router from './Routes'
import propTypes from 'prop-types'

export const ThemeContext = createContext({})

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(theme2)

  const handlerTheme = value => {
    value === 'dark' ? setTheme(theme2) : setTheme(theme1)
  }

  return (
    <ThemeContext.Provider value={{ theme, handlerTheme }}>
      <div>
        <ThemeWrapper>
          <Router />
        </ThemeWrapper>
      </div>
    </ThemeContext.Provider>
  )
}

Layout.propTypes = {
  children: propTypes.element,
}

export default Layout
